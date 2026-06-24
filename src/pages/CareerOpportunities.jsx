import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CareerOpportunities() {

  const [activeDepartment, setActiveDepartment] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Lecturer - Physics (HSC Section)",
      department: "Teaching Faculty",
      type: "Full-Time",
      salary: "BDT 45,000 - 55,000 / month",
      experience: "Minimum 3-5 Years",
      education: "M.Sc. in Physics from a recognized university (MPhil/PhD is a plus).",
      deadline: "July 15, 2026",
      responsibilities: [
        "Deliver comprehensive lectures adhering to the National Curriculum (NCTB) in both Bangla and English versions.",
        "Prepare standardized creative question papers (Srijonshil) and conduct mock board examinations.",
        "Mentor students during remedial hours and offer guidance for engineering university admission preparations."
      ]
    },
    {
      id: 2,
      title: "Assistant Teacher - English (Secondary Section)",
      department: "Teaching Faculty",
      type: "Full-Time",
      salary: "BDT 32,000 - 38,000 / month",
      experience: "1-2 Years (Freshers with great IELTS scores may apply)",
      education: "B.A. (Honors) & M.A. in English Literature or Applied Linguistics.",
      deadline: "July 18, 2026",
      responsibilities: [
        "Instruct students on English grammar parameters, comprehension matrices, and creative writing skills.",
        "Organize annual inter-house debate tournaments and public speaking workshops.",
        "Evaluate assignments, manage progressive report charts, and coordinate parent-teacher alignments."
      ]
    },
    {
      id: 3,
      title: "Senior Academic Coordinator",
      department: "Administration",
      type: "Full-Time",
      salary: "BDT 60,000 - 75,000 / month",
      experience: "Minimum 5+ Years",
      education: "Master's degree in Education Management, IR, or any core discipline.",
      deadline: "July 12, 2026",
      responsibilities: [
        "Supervise weekly lesson blueprints distribution and ensure full compliance with secondary education board matrices.",
        "Manage terminal exam schedules, staff rotation distributions, and pedagogical audit logs.",
        "Liaise directly with the Principal and Governing Board to update academic code parameters."
      ]
    },
    {
      id: 4,
      title: "IT Support Specialist & Lab System Admin",
      department: "Support Staff",
      type: "Full-Time",
      salary: "BDT 28,000 - 35,000 / month",
      experience: "2+ Years",
      education: "B.Sc. in CSE, EEE, or Diploma in IT/Network Engineering.",
      deadline: "July 22, 2026",
      responsibilities: [
        "Maintain the primary computer lab systems, campus Wi-Fi topologies, and biometric attendance relays.",
        "Provide prompt technical troubleshooting for smart digital classrooms and projection modules.",
        "Manage secure local database backup streams for the core School Management System platform."
      ]
    }
  ];

  const categories = ['All', 'Teaching Faculty', 'Administration', 'Support Staff'];

  const filteredJobs = activeDepartment === 'All'
    ? jobOpenings
    : jobOpenings.filter(job => job.department === activeDepartment);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedJob(null);
    }, 2000);
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans relative">
      <div className="max-w-[1100px] mx-auto space-y-10">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-10 text-center">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Join Our Academic Family</h1>
            <p className="text-blue-100 font-medium">Build a Rewarding Career Shaping the Leaders of Tomorrow</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex gap-4 items-start p-2">
            <span className="text-2xl bg-blue-50 p-2.5 rounded-xl">📈</span>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Provident Fund & Gratuity</h4>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Long-term financial security policies for tenured staff.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-2 border-t sm:border-t-0 sm:border-x border-gray-100 sm:px-6">
            <span className="text-2xl bg-emerald-50 p-2.5 rounded-xl">🕌</span>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Festival Bonuses</h4>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Two fully disbursed gross festival bonuses yearly.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-2 border-t sm:border-t-0 p-2">
            <span className="text-2xl bg-purple-50 p-2.5 rounded-xl">🎓</span>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Research & Training</h4>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Fully sponsored standard professional workshop programs.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center bg-white p-3 rounded-xl shadow-md border border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveDepartment(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition duration-200 cursor-pointer ${
                activeDepartment === cat
                  ? 'bg-[#1e3a8a] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {cat} ({cat === 'All' ? jobOpenings.length : jobOpenings.filter(j => j.department === cat).length})
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center text-gray-400 font-medium border border-gray-100">
              No active vacancies match this category right now. You can check back later!
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-blue-50 text-[#1e3a8a] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-blue-100">
                      {job.department}
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {job.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-gray-800 tracking-tight">{job.title}</h3>
                 
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-1 gap-x-4 text-xs font-semibold text-gray-500">
                    <div className="flex items-center gap-1.5 text-amber-600">💰 {job.salary}</div>
                    <div>💼 Exp: <span className="text-gray-700 font-medium">{job.experience}</span></div>
                    <div className="text-red-500 font-medium">⏳ Deadline: {job.deadline}</div>
                  </div>

                  <div className="pt-2 text-xs text-gray-600 font-medium leading-relaxed max-w-[750px]">
                    <span className="font-bold text-gray-800 block mb-1">Prerequisite Education:</span>
                    {job.education}
                  </div>
                </div>

                <div className="w-full md:w-auto shrink-0 border-t md:border-t-0 pt-4 md:pt-0">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full md:w-auto bg-[#1e3a8a] hover:bg-blue-700 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-md transition cursor-pointer text-center"
                  >
                    View Details & Apply
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center pt-2">
          <Link to="/" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl shadow-md transition text-decoration-none">
            Back to Home Dashboard
          </Link>
        </div>

      </div>
      {selectedJob && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end transition-opacity duration-300"
          onClick={() => setSelectedJob(null)}
        >
          
          <div 
            className="bg-white w-full max-w-[600px] h-full shadow-2xl flex flex-col justify-between overflow-y-auto transform animate-slide-in p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4 border-b border-gray-100 pb-5">
              <div className="flex items-center justify-between">
                <span className="bg-blue-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  {selectedJob.department}
                </span>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold h-8 w-8 rounded-full flex items-center justify-center transition text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <h2 className="text-xl font-black text-gray-800 tracking-tight leading-snug">{selectedJob.title}</h2>
              <div className="text-xs font-bold text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                <span>Compensation: <span className="text-emerald-600">{selectedJob.salary}</span></span>
                <span>•</span>
                <span>Experience: <span className="text-gray-700">{selectedJob.experience}</span></span>
              </div>
            </div>
            <div className="flex-1 py-6 space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Core Responsibilities</h4>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i} className="text-xs text-gray-600 font-medium leading-relaxed flex items-start gap-2">
                      <span className="text-[#1e3a8a] text-sm mt-[-2px]">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-4 border-t border-gray-100 pt-6">
                <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2">Submit Official Application</h4>
                
                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center text-xs font-bold animate-pulse">
                    🎉 Record logged successfully! Our HR team will reach out soon.
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[11px] font-bold text-gray-500 uppercase">Full Name</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-blue-500" placeholder="e.g. Md. Ashraful Islam" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[11px] font-bold text-gray-500 uppercase">Primary Email ID</label>
                        <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-blue-500" placeholder="name@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[11px] font-bold text-gray-500 uppercase">Contact Number</label>
                        <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-blue-500" placeholder="+880 1711-XXXXXX" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[11px] font-bold text-gray-500 uppercase">Total Experience Scale</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-blue-500" placeholder="e.g. 3 Years and 4 Months" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-500 uppercase">LinkedIn / Portfolio URL (Optional)</label>
                      <input type="url" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-blue-500" placeholder="https://linkedin.com/in/username" />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-500 uppercase">Brief Cover Pitch Summary</label>
                      <textarea required rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-blue-500 resize-none" placeholder="Elaborate on why your teaching methodology aligns with our guidelines..."></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition cursor-pointer text-center"
                    >
                      Transmit Document Payload
                    </button>
                  </>
                )}
              </form>

            </div>

            <div className="border-t border-gray-100 pt-4 flex justify-end gap-2 bg-white">
              <button
                onClick={() => setSelectedJob(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs py-2.5 px-5 rounded-lg transition cursor-pointer"
              >
                Dismiss Position
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default CareerOpportunities;