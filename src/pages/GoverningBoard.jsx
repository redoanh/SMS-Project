import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GoverningBoard() {
  const [selectedMember, setSelectedMember] = useState(null);

  const boardMembers = [
    {
      id: 1,
      name: "Alhaj Muhiuddin Khan Alamgir",
      role: "Chairman of the Board",
      category: "Executive Leadership",
      email: "chairman@school.edu.bd",
      phone: "+880 1711-998877",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      occupation: "Industrialist & Philanthropist",
      termStart: "2024",
      bio: "An eminent entrepreneur dedicated to elevating civic education infrastructure and progressive curriculum developments across the country."
    },
    {
      id: 2,
      name: "Dr. Syed Anwar Husain",
      role: "Vice Chairman",
      category: "Executive Leadership",
      email: "s.anwar@school.edu.bd",
      phone: "+880 1711-554433",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      occupation: "Former University Professor",
      termStart: "2024",
      bio: "Renowned academic scholar with over three decades of research framework engineering in institutional governance and policy implementation."
    },
    {
      id: 3,
      name: "Begum Rokeya Rahman",
      role: "Chief Patron & Patron Member",
      category: "Patrons",
      email: "rokeya.r@school.edu.bd",
      phone: "+880 1711-223344",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      occupation: "Social Activist & Writer",
      termStart: "2022",
      bio: "Prominent advocate for standardizing primary child healthcare and women empowerment programs at national levels."
    },
    {
      id: 4,
      name: "Advocate Mahbubur Rahman",
      role: "Legal Trustee Advisor",
      category: "Trustees & Advisors",
      email: "mahbub.legal@school.edu.bd",
      phone: "+880 1712-887766",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      occupation: "Senior Counsel, Supreme Court",
      termStart: "2025",
      bio: "Oversees constitutional regulatory obligations, land assets management, and institutional financial audit alignments."
    },
    {
      id: 5,
      name: "Engineer Md. Nazrul Islam",
      role: "Development Trustee",
      category: "Trustees & Advisors",
      email: "nazrul.dev@school.edu.bd",
      phone: "+880 1713-113355",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      occupation: "Managing Director, BD Infra Group",
      termStart: "2023",
      bio: "Directs civil expansion, architectural blueprints execution, smart digital labs setups, and campus automation updates."
    },
    {
      id: 6,
      name: "Professor Dr. Farhana Yasmin",
      role: "Education Board Representative",
      category: "General Board Members",
      email: "f.yasmin@school.edu.bd",
      phone: "+880 1715-442299",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=400",
      occupation: "Curriculum Specialist",
      termStart: "2025",
      bio: "Assigned liaison from the secondary educational regulatory board tasked with coordinating board exam matrices and standardization."
    },
    {
      id: 7,
      name: "Kazi Faruque Ahmed",
      role: "Guardian Committee Representative",
      category: "General Board Members",
      email: "faruque.guardian@school.edu.bd",
      phone: "+880 1716-667788",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      occupation: "Merchant & Businessman",
      termStart: "2026",
      bio: "Elected voice of the general student parent body optimizing transparency between running families and school authorities."
    },
    {
      id: 8,
      name: "Dr. Fazle Rabbi",
      role: "Ex-Officio Member Secretary",
      category: "General Board Members",
      email: "principal@school.edu.bd",
      phone: "+880 1711-111111",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400",
      occupation: "School Principal",
      termStart: "2021",
      bio: "Acts as executive operation linkage translating management strategy parameters directly into academic execution blueprints."
    }
  ];
  const sections = ["Executive Leadership", "Patrons", "Trustees & Advisors", "General Board Members"];

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans relative">
      <div className="max-w-[1100px] mx-auto space-y-12">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 text-center">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Governing Board of Trustees</h1>
            <p className="text-blue-100 font-medium">The Visionary Council Steering Academic & Structural Strategies</p>
          </div>
        </div>
        {sections.map((sectionTitle) => {
          const sectionMembers = boardMembers.filter(m => m.category === sectionTitle);
          if (sectionMembers.length === 0) return null;

          return (
            <div key={sectionTitle} className="space-y-6">
            
              <h2 className="text-xl font-bold text-[#1e3a8a] border-b-2 border-gray-200 pb-2 flex items-center gap-2">
                🏛 {sectionTitle}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sectionMembers.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer group"
                  >
                    <div className="h-56 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between text-center">
                      <div>
                        <h3 className="font-bold text-gray-800 text-base leading-snug mb-1 group-hover:text-blue-600 transition">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-amber-600 bg-amber-50 rounded-full px-3 py-1 inline-block mt-1 border border-amber-100">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-[11px] text-gray-400 font-medium mt-4 border-t border-gray-100 pt-3">
                        Professional Profile: <span className="text-gray-600 font-semibold">{member.occupation}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div className="flex justify-center pt-4">
          <Link to="/" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl shadow-md transition text-decoration-none">
            Back to Home Dashboard
          </Link>
        </div>

      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white w-full max-w-[550px] rounded-3xl shadow-2xl overflow-hidden relative border border-gray-100 transform scale-100 transition-all duration-300 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold h-9 w-9 rounded-full flex items-center justify-center transition shadow-sm z-10 cursor-pointer text-sm"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] p-6 text-white text-center flex flex-col items-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-lg mb-3"
              />
              <span className="bg-amber-500 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider mb-1 shadow-sm">
                {selectedMember.category}
              </span>
              <h2 className="text-xl font-extrabold tracking-tight">{selectedMember.name}</h2>
              <p className="text-blue-100 text-xs font-semibold mt-0.5">{selectedMember.role}</p>
            </div>

            <div className="p-6 space-y-5 bg-white">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Background</span>
                  <span className="text-sm font-bold text-gray-800 block truncate">{selectedMember.occupation}</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Board Seat Since</span>
                  <span className="text-sm font-bold text-gray-800">January, {selectedMember.termStart}</span>
                </div>
              </div>
              <div className="bg-blue-50/30 p-4 rounded-xl border border-blue-100/50">
                <span className="block text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wide mb-1">Executive Mandate & Bio</span>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">{selectedMember.bio}</p>
              </div>
              <div className="space-y-2 border-t border-gray-100 pt-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Direct Official Registry Links</h4>
                
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center gap-3 bg-blue-50/50 hover:bg-blue-50 p-3 rounded-xl border border-blue-100/50 transition text-decoration-none group"
                >
                  <span className="bg-white h-7 w-7 rounded-lg shadow-sm border border-blue-100 flex items-center justify-center text-xs text-blue-600 font-bold select-none">✉</span>
                  <div className="truncate">
                    <span className="block text-[10px] text-gray-400 font-semibold leading-none mb-0.5">Board Desk Email</span>
                    <span className="text-xs font-bold text-gray-700 group-hover:text-blue-600 transition truncate block">{selectedMember.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${selectedMember.phone}`}
                  className="flex items-center gap-3 bg-emerald-50/40 hover:bg-emerald-50 p-3 rounded-xl border border-emerald-100/50 transition text-decoration-none group"
                >
                  <span className="bg-white h-7 w-7 rounded-lg shadow-sm border border-emerald-100 flex items-center justify-center text-xs text-emerald-600 font-bold select-none">📞</span>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-semibold leading-none mb-0.5">Secure Registry Phone</span>
                    <span className="text-xs font-bold text-gray-700 font-mono group-hover:text-emerald-600 transition block">{selectedMember.phone}</span>
                  </div>
                </a>

              </div>

            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xs py-2.5 px-5 rounded-lg transition cursor-pointer"
              >
                Dismiss Profile
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default GoverningBoard;