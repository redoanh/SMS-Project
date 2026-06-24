import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FacultyDirectory() {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedMember, setSelectedMember] = useState(null);

  const departments = ['All', 'Administration', 'Science', 'Commerce', 'Arts'];

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=100')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to retrieve staff profiles.');
        }
        return res.json();
      })
      .then((data) => {
        const localizedStaff = data.users.map((user) => {
          let dept = 'Science';
          let role = 'Lecturer';
          
          const bdSurnames = ['Rahman', 'Islam', 'Hasan', 'Ahmed', 'Ali', 'Khan', 'Chowdhury', 'Alam', 'Haque', 'Sultana', 'Begum', 'Yasmin'];
          const randomSurname = bdSurnames[user.id % bdSurnames.length];
          const cleanFirstName = user.firstName.replace(/[^a-zA-Z]/g, '');
          const fullName = `${user.gender === 'female' ? 'Ms.' : 'Mr.'} ${cleanFirstName} ${randomSurname}`;

          if (user.id <= 12) {
            dept = 'Administration';
            role = user.id <= 3 ? 'Principal Coordinator' : user.id <= 6 ? 'Assistant Registrar' : 'Administrative Officer';
          } else if (user.id > 12 && user.id <= 40) {
            dept = 'Science';
            role = user.id % 3 === 0 ? 'Senior Lecturer (Physics)' : user.id % 3 === 1 ? 'Lecturer (Chemistry)' : 'Mathematics Instructor';
          } else if (user.id > 40 && user.id <= 70) {
            dept = 'Commerce';
            role = user.id % 2 === 0 ? 'Senior Lecturer (Accounting)' : 'Lecturer (Business Studies)';
          } else {
            dept = 'Arts';
            role = user.id % 2 === 0 ? 'Senior English Instructor' : 'Lecturer (Civics & History)';
          }

          return {
            id: user.id,
            name: fullName,
            role: role,
            department: dept,
            email: `${cleanFirstName.toLowerCase()}.${randomSurname.toLowerCase()}@school.edu.bd`,
            phone: `+880 171${(user.id % 9) + 1}-${user.phone.replace(/[^0-9]/g, '').slice(0, 6)}`,
            image: user.image,
            bloodGroup: user.bloodGroup || 'O+',
            age: (user.age % 25) + 28, 
            roomNo: 100 + (user.id % 30),
            joiningYear: 2015 + (user.id % 10)
          };
        });

        setFacultyMembers(localizedStaff);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getDeptCount = (dept) => {
    if (dept === 'All') return facultyMembers.length;
    return facultyMembers.filter((m) => m.department === dept).length;
  };

  const filteredFaculty = activeDepartment === 'All'
    ? facultyMembers
    : facultyMembers.filter((member) => member.department === activeDepartment);

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans relative">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 text-center">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Faculty & Staff Directory</h1>
            <p className="text-blue-100 font-medium">
              {loading ? 'Synchronizing profiles...' : `Meet Our ${facultyMembers.length} Core Educators & Administrators`}
            </p>
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-gray-100 shadow-md">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mb-4"></div>
            <p className="text-gray-500 font-medium">Fetching structural data records from DummyJSON platform...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl text-center shadow-sm">
            <p className="font-bold mb-2">Data Hydration Sync Failed</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex flex-wrap justify-center gap-2 bg-white p-3 rounded-xl shadow-md border border-gray-100">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDepartment(dept)}
                  className={`px-5 py-2 rounded-lg text-sm font-bold transition duration-200 cursor-pointer ${
                    activeDepartment === dept
                      ? 'bg-[#1e3a8a] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {dept} ({getDeptCount(dept)})
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFaculty.map((member) => (
                <div 
                  key={member.id} 
                  onClick={() => setSelectedMember(member)}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="h-56 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-40 h-40 object-contain group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 right-3 bg-[#1e3a8a]/90 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      {member.department}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-800 text-base leading-snug mb-1 group-hover:text-blue-600 transition">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600">{member.role}</p>
                    </div>

                    <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-gray-400 select-none text-[13px]">✉</span>
                        <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition truncate">{member.email}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 select-none text-[13px]">📞</span>
                        <span className="font-mono">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

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
            className="bg-white w-full max-w-[550px] rounded-3xl shadow-2xl overflow-hidden relative border border-gray-100 transform scale-100 transition-all duration-300 max-my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold h-9 w-9 rounded-full flex items-center justify-center transition shadow-sm z-10 cursor-pointer text-sm"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] p-6 text-white text-center flex flex-col items-center relative">
              <div className="w-28 h-28 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md p-2 mb-3 border border-white/20 shadow-inner">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="bg-white/20 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider border border-white/10 mb-1">
                {selectedMember.department} Faculty
              </span>
              <h2 className="text-xl font-extrabold tracking-tight">{selectedMember.name}</h2>
              <p className="text-blue-100 text-xs font-semibold mt-0.5">{selectedMember.role}</p>
            </div>

            <div className="p-6 space-y-5 bg-white">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Office/Room</span>
                  <span className="text-sm font-bold text-gray-800">Room {selectedMember.roomNo}</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Joining Date</span>
                  <span className="text-sm font-bold text-gray-800">July, {selectedMember.joiningYear}</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Faculty Age</span>
                  <span className="text-sm font-bold text-gray-800">{selectedMember.age} Years</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Blood Group</span>
                  <span className="text-sm font-bold text-red-600">{selectedMember.bloodGroup}</span>
                </div>
              </div>
              <div className="space-y-2 border-t border-gray-100 pt-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Direct Communications</h4>
                
                <a 
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center gap-3 bg-blue-50/50 hover:bg-blue-50 p-3 rounded-xl border border-blue-100/50 transition text-decoration-none group"
                >
                  <span className="bg-white h-7 w-7 rounded-lg shadow-sm border border-blue-100 flex items-center justify-center text-xs text-blue-600 font-bold select-none">✉</span>
                  <div className="truncate">
                    <span className="block text-[10px] text-gray-400 font-semibold leading-none mb-0.5">Email Address</span>
                    <span className="text-xs font-bold text-gray-700 group-hover:text-blue-600 transition truncate block">{selectedMember.email}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${selectedMember.phone}`}
                  className="flex items-center gap-3 bg-emerald-50/40 hover:bg-emerald-50 p-3 rounded-xl border border-emerald-100/50 transition text-decoration-none group"
                >
                  <span className="bg-white h-7 w-7 rounded-lg shadow-sm border border-emerald-100 flex items-center justify-center text-xs text-emerald-600 font-bold select-none">📞</span>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-semibold leading-none mb-0.5">Mobile Hotline</span>
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

export default FacultyDirectory;