import React from 'react';
import { Link } from 'react-router-dom';

function MissionVision() {

  const keyMilestones = [
    { metric: "100%", label: "HSC Pass Rate", detail: "Consistent top-tier academic scores across all board examinations." },
    { metric: "4.92", label: "Average GPA 5.00", detail: "Consistently securing stellar marks across Science, Commerce, and Arts." },
    { metric: "15,000+", label: "Alumni Network", detail: "Global footprint of professionals, engineers, leaders, and thinkers." },
    { metric: "35+", label: "Co-Curricular Clubs", detail: "Nurturing talents in debate, robotics, cricket, drama, and ICT." }
  ];

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans">
      <div className="max-w-[1000px] mx-auto space-y-10">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-10 text-center">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Our Core Mission & Vision</h1>
            <p className="text-blue-100 font-medium">Charting the Strategic Blueprint for Tomorrow's Leaders</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between space-y-6 transform hover:-translate-y-0.5 transition duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-50 text-[#1e3a8a] text-2xl rounded-2xl flex items-center justify-center font-bold shadow-inner">
                🎯
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">The Vision Statement</h2>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                To stand as a premier educational sanctuary in Bangladesh, recognized for fostering a culture of rigorous intellectual inquiry, moral absolute truth, and technological fluency. We aim to sculpt highly adaptable citizen leaders ready to navigate and shape a complex global framework.
              </p>
            </div>
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
              <span className="block text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Primary Objective Horizon</span>
              <p className="text-xs text-gray-500 font-semibold">Transforming classrooms into collaborative laboratories of experimental learning and human excellence by 2030.</p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between space-y-6 transform hover:-translate-y-0.5 transition duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 text-2xl rounded-2xl flex items-center justify-center font-bold shadow-inner">
                🚀
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">The Mission Statement</h2>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Our mission is to deliver comprehensive, values-driven instruction through interactive modern curricula, professional development pipelines for educators, and dynamic stakeholder alliances. We ensure every child achieves academic distinction while mastering empathy and creative grit.
              </p>
            </div>
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100/50">
              <span className="block text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-1">Operational Mandate</span>
              <p className="text-xs text-gray-500 font-semibold">Sustaining low student-to-teacher configurations and implementing STEM models across secondary levels.</p>
            </div>
          </div>

        </div>
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 space-y-6">
          <h2 className="text-xl font-bold text-[#1e3a8a] border-b border-gray-100 pb-3 flex items-center gap-2">
            🛡️ Core Value Foundations
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2 p-4 hover:bg-gray-50 rounded-xl transition">
              <span className="text-lg font-bold text-blue-600">01. Academic Rigor</span>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Nurturing depth over memorization, allowing scholars to fully decode scientific variables and artistic contexts.
              </p>
            </div>
            <div className="space-y-2 p-4 hover:bg-gray-50 rounded-xl transition">
              <span className="text-lg font-bold text-blue-600">02. Civic Character</span>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Instilling accountability, social volunteer spirit, patriotism, and respect for our cultural national roots.
              </p>
            </div>
            <div className="space-y-2 p-4 hover:bg-gray-50 rounded-xl transition">
              <span className="text-lg font-bold text-blue-600">03. Digital Literacy</span>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Integrating AI automation tools, computing fundamentals, and web framework exposure into the general class syllabus.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyMilestones.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center space-y-1">
              <span className="block text-2xl font-black text-[#1e3a8a] tracking-tight">{item.metric}</span>
              <span className="block text-xs font-bold text-gray-800">{item.label}</span>
              <p className="text-[10px] text-gray-400 font-medium leading-normal pt-1 border-t border-gray-50 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-2">
          <Link to="/" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl shadow-md transition text-decoration-none">
            Back to Home Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}

export default MissionVision;