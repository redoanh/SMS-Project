import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchJobs = (url) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        axios.get(url)
            .then(response => {
                if (isMounted && response.data.success) {
                    setJobs(response.data.data);
                }
            })
            .catch(err => {
                if (isMounted) setError("জব সার্কুলার লোড করতে সমস্যা হয়েছে। দয়া করে পরে চেষ্টা করুন।");
                console.error(err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false; };
    }, [url]);

    return { jobs, loading, error };
};

const JobSkeleton = () => (
    <div className="col-span-12 md:col-span-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="flex flex-wrap gap-2">
                <div className="h-6 bg-gray-200 rounded w-20"></div>
                <div className="h-6 bg-gray-200 rounded w-24"></div>
                <div className="h-6 bg-gray-200 rounded w-28"></div>
            </div>
            <div className="space-y-2 pt-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    </div>
);

const JobCard = ({ job }) => {
   
    const renderResponsibilities = () => {
        try {
            if (!job.responsibilities) return null;
            const parsed = typeof job.responsibilities === 'string' 
                ? JSON.parse(job.responsibilities) 
                : job.responsibilities;
            
            if (!Array.isArray(parsed)) return null;

            return (
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Key Responsibilities</h5>
                    <ul className="space-y-1.5">
                        {parsed.map((res, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                                <span className="text-blue-500 mt-1">✔</span> {res}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } catch (e) {
            console.error("Error parsing responsibilities", e);
            return null;
        }
    };

    return (
        <div className="col-span-12 md:col-span-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-200">
                        {job.title}
                    </h3>
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded-full border border-blue-100 shrink-0">
                        💼 {job.type}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-medium text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                        <span className="text-gray-400">🏢</span> <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-gray-400">🎓</span> <span className="truncate">{job.education}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                        <span className="text-gray-400">⏳</span> <span>Experience: {job.experience}</span>
                    </div>
                </div>

                {renderResponsibilities()}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold mb-0.5">Offered Salary</p>
                    <p className="text-gray-800 font-mono font-bold text-sm">{job.salary}</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] uppercase text-gray-400 font-bold mb-0.5">Application Deadline</p>
                    <p className="text-red-500 font-mono font-bold bg-red-50 border border-red-100 px-2.5 py-1 rounded-lg">
                        🚨 {job.deadline}
                    </p>
                </div>
            </div>
        </div>
    );
};

const CareerPage = () => {
  
    const { jobs, loading, error } = useFetchJobs('http://127.0.0.1:8000/api/jobs');

    return (
        <div className="bg-[#f8f9fa] min-h-screen py-12 px-4 font-sans">
            <div className="max-w-[1000px] mx-auto space-y-8">
           
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 text-center">
                        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">School Career Opportunities</h1>
                        <p className="text-blue-100 text-sm font-medium">
                            {loading ? 'Fetching available nodes...' : `Join our team — ${jobs.length} Active Positions Open`}
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-5 rounded-xl text-center shadow-sm text-sm font-medium">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-12 gap-6">
                    {loading ? (
                    
                        Array.from({ length: 4 }).map((_, idx) => <JobSkeleton key={idx} />)
                    ) : (
                    
                        jobs.map((job) => <JobCard key={job.id} job={job} />)
                    )}

                    {!loading && jobs.length === 0 && !error && (
                        <div className="col-span-12 text-center py-12 bg-white rounded-2xl border border-gray-100 text-gray-400">
                            <span className="text-3xl block mb-2">📥</span>
                            <p className="text-sm font-medium">বর্তমানে কোনো নিয়োগ বিজ্ঞপ্তি উপলব্ধ নেই।</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default CareerPage;