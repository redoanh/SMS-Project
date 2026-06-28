import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [admissions, setAdmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const API_URL = 'http://127.0.0.1:8000/api/admissions';

    // লারাভেল থেকে ডেটা লোড করা
    const fetchAdmissions = async () => {
        try {
            const res = await axios.get(API_URL);
            if (res.data.success) {
                setAdmissions(res.data.data);
            }
        } catch (err) {
            setError('ডাটাবেজ থেকে তথ্য লোড করা যায়নি। লারাভেল সার্ভার রান আছে কি না চেক করুন।');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdmissions();
    }, []);

    // রিকোয়েস্ট ডিলিট লজিক
    const handleDelete = async (id) => {
        if (window.confirm("আপনি কি নিশ্চিতভাবে এই আবেদনটি ডিলিট করতে চান?")) {
            try {
                const res = await axios.delete(`${API_URL}/${id}`);
                if (res.data.success) {
                    setAdmissions(admissions.filter(app => app.id !== id));
                }
            } catch (err) {
                alert("ডিলিট করতে সমস্যা হয়েছে।");
            }
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen font-sans flex">
            {/* সাইডবার */}
            <div className="w-64 bg-slate-900 text-white p-5 space-y-6 hidden md:block shrink-0">
                <h2 className="text-xl font-black text-blue-400 tracking-wide">SMS Admin</h2>
                <div className="space-y-2 text-sm font-medium">
                    <div className="bg-blue-600 px-4 py-2.5 rounded-xl text-white cursor-pointer">📥 Admissions</div>
                    <div className="hover:bg-slate-800 px-4 py-2.5 rounded-xl text-slate-400 cursor-not-allowed">👥 Students List</div>
                    <div className="hover:bg-slate-800 px-4 py-2.5 rounded-xl text-slate-400 cursor-not-allowed">👨‍🏫 Teachers Node</div>
                    <div className="hover:bg-slate-800 px-4 py-2.5 rounded-xl text-slate-400 cursor-not-allowed">⚙️ Settings</div>
                </div>
            </div>

            {/* মেইন কন্টেন্ট */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                {/* টপ বার */}
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm mb-6 border border-gray-100">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Admin Central Controller</h1>
                        <p className="text-xs text-gray-400">Manage institutional registrations</p>
                    </div>
                    <button onClick={() => window.location.href = '/'} className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-1.5 rounded-xl text-xs font-bold transition">
                        Exit Node 🚪
                    </button>
                </div>

                {error && <div className="bg-red-50 text-red-600 text-xs font-bold p-4 rounded-xl border border-red-200 mb-4">{error}</div>}

                {/* স্ট্যাটস কার্ড */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase">Total Applications</p>
                        <p className="text-2xl font-black text-gray-800 mt-1">{admissions.length}</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase">Pending Review</p>
                        <p className="text-2xl font-black text-amber-600 mt-1">{admissions.length}</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase">System Health</p>
                        <p className="text-2xl font-black text-green-600 mt-1">100% OK</p>
                    </div>
                </div>

                {/* অ্যাপ্লিকেশনের লাইভ টেবিল/লিস্ট */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Live Admission Pipeline</h2>
                    
                    {loading ? (
                        <p className="text-sm text-gray-400 text-center py-10 animate-pulse">Fetching rows from MySQL...</p>
                    ) : admissions.length === 0 ? (
                        <p className="text-sm text-gray-400 text-center py-10">কোনো নতুন অ্যাডমিশন ফর্ম সাবমিট করা হয়নি।</p>
                    ) : (
                        <div className="space-y-4">
                            {admissions.map(app => (
                                <div key={app.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition">
                                    <div className="flex gap-4 items-start">
                                        <img src={app.student_picture} alt="Student" className="w-14 h-14 rounded-xl object-cover bg-gray-200 border" />
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h4 className="font-bold text-gray-800 text-sm">{app.student_name}</h4>
                                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 font-bold text-[9px] rounded uppercase">{app.class_applied}</span>
                                                {app.group_subject && <span className="px-2 py-0.5 bg-purple-100 text-purple-700 font-bold text-[9px] rounded uppercase">{app.group_subject}</span>}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-0.5">Parents: {app.father_name} | Income: ৳{app.yearly_income}</p>
                                            <div className="text-[10px] text-gray-400 flex gap-3 mt-1 font-semibold">
                                                <span>📞 {app.phone}</span>
                                                <span>✉️ {app.email}</span>
                                            </div>
                                            {app.transfer_certificate && (
                                                <a href={app.transfer_certificate} target="_blank" rel="noreferrer" className="inline-block text-[10px] text-red-600 bg-red-50 border border-red-100 font-bold px-2 py-0.5 rounded mt-2">
                                                    📄 View TC (PDF)
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete(app.id)} className="w-full sm:w-auto bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 px-4 py-2 rounded-xl text-xs font-bold transition">
                                        Delete 🗑
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;