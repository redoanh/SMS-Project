import React, { useState, useEffect } from 'react';

function Office() {
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*
    fetch('http://127.0.0.1:8000/api/office-members')
      .then(res => res.json())
      .then(data => { setMembers(data); setLoading(false); });
    */
    setTimeout(() => {
      setMembers([
        // --- Administration (01 - 05) ---
        { id: 1, name: "Dr. Mahfuzur Rahman", role: "Principal", category: "Administration", email: "principal@school.edu.bd", phone: "01711-223344", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150" },
        { id: 2, name: "Mrs. Rokeya Begum", role: "Vice Principal", category: "Administration", email: "rokeya.vp@school.edu.bd", phone: "01711-556677", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150" },
        { id: 3, name: "Syed Arif Faisal", role: "Academic Coordinator", category: "Administration", email: "arif.coord@school.edu.bd", phone: "01819-334455", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
        { id: 4, name: "Farhana Yasmin", role: "Headmistress (Primary Section)", category: "Administration", email: "farhana.hm@school.edu.bd", phone: "01552-445566", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150" },
        { id: 5, name: "Gazi Mazharul Islam", role: "Administrative Officer", category: "Administration", email: "gazi.admin@school.edu.bd", phone: "01911-667788", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150" },

        // --- Teachers (06 - 35) ---
        { id: 6, name: "S.M. Al-Amin", role: "Senior Lecturer (Physics)", category: "Teacher", email: "alamin.phy@school.edu.bd", phone: "01911-223344", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" },
        { id: 7, name: "Tanjina Ahmed", role: "Assistant Teacher (English)", category: "Teacher", email: "tanjina.eng@school.edu.bd", phone: "01811-223344", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150" },
        { id: 8, name: "Ahsan Habib", role: "Head of Mathematics", category: "Teacher", email: "habib.math@school.edu.bd", phone: "01712-998877", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
        { id: 9, name: "Nusrat Jahan", role: "Lecturer (Chemistry)", category: "Teacher", email: "nusrat.chem@school.edu.bd", phone: "01673-445566", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150" },
        { id: 10, name: "Arifur Rahman", role: "Senior Teacher (Biology)", category: "Teacher", email: "arif.bio@school.edu.bd", phone: "01311-778899", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
        { id: 11, name: "Sabina Yasmin", role: "Assistant Teacher (Bangla)", category: "Teacher", email: "sabina.ban@school.edu.bd", phone: "01411-556677", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" },
        { id: 12, name: "Kamrul Islam", role: "Lecturer (ICT)", category: "Teacher", email: "kamrul.ict@school.edu.bd", phone: "01715-663322", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150" },
        { id: 13, name: "Sadia Afrin", role: "Senior Teacher (Social Science)", category: "Teacher", email: "sadia.ss@school.edu.bd", phone: "01914-887766", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150" },
        { id: 14, name: "Mehedi Hasan", role: "Assistant Teacher (History)", category: "Teacher", email: "mehedi.hist@school.edu.bd", phone: "01815-223344", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150" },
        { id: 15, name: "Laila Arjumand", role: "Lecturer (Accounting)", category: "Teacher", email: "laila.acc@school.edu.bd", phone: "01612-778899", image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?w=150" },
        { id: 16, name: "Zahid Hasan", role: "Senior Teacher (Geography)", category: "Teacher", email: "zahid.geo@school.edu.bd", phone: "01515-998877", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150" },
        { id: 17, name: "Rumana Chowdhury", role: "Assistant Teacher (Arts)", category: "Teacher", email: "rumana.art@school.edu.bd", phone: "01719-665544", image: "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150" },
        { id: 18, name: "Mizanur Rahman", role: "Physical Education Instructor", category: "Teacher", email: "mizan.pe@school.edu.bd", phone: "01912-445566", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150" },
        { id: 19, name: "Fahmida Nabi", role: "Music Teacher", category: "Teacher", email: "fahmida.mus@school.edu.bd", phone: "01816-334455", image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=150" },
        { id: 20, name: "Anisul Hoque", role: "Senior Lecturer (Religious)", category: "Teacher", email: "anis.rel@school.edu.bd", phone: "01617-223344", image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?w=150" },
        { id: 21, name: "Tariqul Islam", role: "Assistant Teacher (Math)", category: "Teacher", email: "tariq.math@school.edu.bd", phone: "01518-112233", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150" },
        { id: 22, name: "Sultana Razia", role: "Senior Teacher (English)", category: "Teacher", email: "razia.eng@school.edu.bd", phone: "01713-445566", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150" },
        { id: 23, name: "Rashedul Bari", role: "Lecturer (Economics)", category: "Teacher", email: "rashed.eco@school.edu.bd", phone: "01919-556677", image: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?w=150" },
        { id: 24, name: "Naila Zaman", role: "Assistant Teacher (Science)", category: "Teacher", email: "naila.sci@school.edu.bd", phone: "01813-667788", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150" },
        { id: 25, name: "Asif Iqbal", role: "Junior Teacher (Bangla)", category: "Teacher", email: "asif.ban@school.edu.bd", phone: "01614-889900", image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=150" },
        { id: 26, name: "Khaleda Zia", role: "Senior Teacher (Home Econ.)", category: "Teacher", email: "khaleda.hec@school.edu.bd", phone: "01714-990011", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
        { id: 27, name: "Monirul Haque", role: "Lecturer (Business Studies)", category: "Teacher", email: "monir.bus@school.edu.bd", phone: "01915-112233", image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=150" },
        { id: 28, name: "Sharmin Sultana", role: "Junior Teacher (English)", category: "Teacher", email: "sharmin.eng@school.edu.bd", phone: "01815-334455", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150" },
        { id: 29, name: "Imran Khan", role: "Senior Teacher (Chemistry)", category: "Teacher", email: "imran.chem@school.edu.bd", phone: "01616-445566", image: "https://images.unsplash.com/photo-1504257401789-b3604d5fc95a?w=150" },
        { id: 30, name: "Tahmina Chowdhury", role: "Lecturer (Finance)", category: "Teacher", email: "tahmina.fin@school.edu.bd", phone: "01517-556677", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150" },
        { id: 31, name: "Shafiqul Islam", role: "Junior Teacher (Math)", category: "Teacher", email: "shafiq.math@school.edu.bd", phone: "01716-667788", image: "https://images.unsplash.com/photo-1487309078313-be80b332907a?w=150" },
        { id: 32, name: "Farzana Boby", role: "Senior Teacher (Civics)", category: "Teacher", email: "boby.civ@school.edu.bd", phone: "01917-778899", image: "https://images.unsplash.com/photo-1541647376583-d184f71152a5?w=150" },
        { id: 33, name: "Ashraful Huda", role: "Assistant Teacher (Physics)", category: "Teacher", email: "ashraf.phy@school.edu.bd", phone: "01818-889900", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150" },
        { id: 34, name: "Jannatul Ferdous", role: "Junior Teacher (Social Studies)", category: "Teacher", email: "jannat.ss@school.edu.bd", phone: "01619-990011", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150" },
        { id: 35, name: "Hasan Mahmud", role: "Senior Lecturer (Statistics)", category: "Teacher", email: "hasan.stat@school.edu.bd", phone: "01519-112233", image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=150" },

        // --- Staff & Office Support (36 - 50) ---
        { id: 36, name: "MD. Redoan Islam", role: "Head of Accounts", category: "Staff", email: "redoan.acc@school.edu.bd", phone: "01511-223344", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150" },
        { id: 37, name: "Kamrul Hasan", role: "IT Support Officer", category: "Staff", email: "kamrul.it@school.edu.bd", phone: "01611-223344", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
        { id: 38, name: "Selina Rahman", role: "Librarian", category: "Staff", email: "selina.lib@school.edu.bd", phone: "01717-334455", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150" },
        { id: 39, name: "Anwar Hossain", role: "Assistant Accountant", category: "Staff", email: "anwar.acc@school.edu.bd", phone: "01918-445566", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150" },
        { id: 40, name: "Tania Sultana", role: "Office Receptionist", category: "Staff", email: "tania.rec@school.edu.bd", phone: "01819-556677", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150" },
        { id: 41, name: "Raju Ahmed", role: "Lab Assistant (Computer)", category: "Staff", email: "raju.lab@school.edu.bd", phone: "01611-667788", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150" },
        { id: 42, name: "Mitu Khandakar", role: "Lab Assistant (Chemistry)", category: "Staff", email: "mitu.lab@school.edu.bd", phone: "01512-778899", image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?w=150" },
        { id: 43, name: "Zamil Uddin", role: "Store Keeper", category: "Staff", email: "zamil.store@school.edu.bd", phone: "01713-889900", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
        { id: 44, name: "Nasrin Akter", role: "Assistant Librarian", category: "Staff", email: "nasrin.lib@school.edu.bd", phone: "01914-990011", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150" },
        { id: 45, name: "Sajid Hasan", role: "Office Assistant", category: "Staff", email: "sajid.off@school.edu.bd", phone: "01815-112233", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150" },
        { id: 46, name: "Rokshana Parvin", role: "Medical Nurse", category: "Staff", email: "nurse@school.edu.bd", phone: "01616-223344", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150" },
        { id: 47, name: "Abul Kalam", role: "Electrician", category: "Staff", email: "kalam.elect@school.edu.bd", phone: "01517-334455", image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=150" },
        { id: 48, name: "Babul Mia", role: "Head Caretaker", category: "Staff", email: "babul@school.edu.bd", phone: "01718-445566", image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=150" },
        { id: 49, name: "Morjina Begum", role: "Office Ayah", category: "Staff", email: "morjina@school.edu.bd", phone: "01919-556677", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" },
        { id: 50, name: "Abdul Latif", role: "Night Guard", category: "Staff", email: "latif@school.edu.bd", phone: "01811-667788", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150" }
      ]);
      setLoading(false);
    }, 600);
  }, []);

  const filteredMembers = members.filter(member => {
    const matchesTab = activeTab === 'All' || member.category === activeTab;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen py-12 px-4 font-sans">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* হেডার */}
        <div className="text-center max-w-[700px] mx-auto space-y-2">
          <h1 className="text-3xl md:text-5xl font-black text-[#1e3a8a] tracking-tight">Administration & Faculty Directory</h1>
          <p className="text-slate-500 text-sm md:text-base">
            আমাদের প্রতিষ্ঠানের দক্ষ প্রশাসন, অভিজ্ঞ শিক্ষক মণ্ডলী এবং দায়িত্বশীল কর্মকর্তাদের বিস্তারিত তালিকা।
          </p>
        </div>

        {/* ফিল্টার এবং সার্চ বার */}
        <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {['All', 'Administration', 'Teacher', 'Staff'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab === 'All' ? 'All Members' : tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <input 
              type="text"
              placeholder="Search by name or designation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-72 bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition"
            />
            <span className="absolute right-3 top-2.5 text-slate-400 text-sm">🔍</span>
          </div>
        </div>

        {/* 📋 ডাইনামিক এবং রেসপন্সিভ টেবিল সেকশন */}
        {loading ? (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-400 font-medium text-sm animate-pulse">Loading Directory Data...</p>
          </div>
        ) : filteredMembers.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-xs border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-slate-200/60">
                    <th className="p-4 pl-6 w-[80px]">Photo</th>
                    <th className="p-4">Full Name</th>
                    <th className="p-4">Designation</th>
                    <th className="p-4">Category</th>
                    <th className="p-4 pr-6">Contact Info</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-50/40 transition group">
                      
                      {/* ছবি কলাম */}
                      <td className="p-3 pl-6">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-100 shadow-2xs group-hover:scale-105 transition duration-200">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>

                      {/* নাম কলাম */}
                      <td className="p-4">
                        <div className="font-extrabold text-slate-800 tracking-tight group-hover:text-blue-600 transition">
                          {member.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium md:hidden mt-0.5">
                          {member.role} • {member.category}
                        </div>
                      </td>

                      {/* পদবি কলাম */}
                      <td className="p-4 hidden md:table-cell">
                        <div className="font-semibold text-slate-600 text-xs bg-slate-100/50 px-2.5 py-1 rounded-lg inline-block">
                          {member.role}
                        </div>
                      </td>

                      {/* ক্যাটাগরি ব্যাজ কলাম */}
                      <td className="p-4 hidden md:table-cell">
                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                          member.category === 'Administration' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
                          member.category === 'Teacher' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                          'bg-amber-50 text-amber-600 border border-amber-100'
                        }`}>
                          {member.category}
                        </span>
                      </td>

                      {/* কন্টাক্ট ইনফো কলাম */}
                      <td className="p-4 pr-6">
                        <div className="space-y-0.5 text-xs">
                          <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                            <span className="text-gray-400 text-xs">✉️</span>
                            <span className="hover:underline cursor-pointer break-all">{member.email}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400 font-mono tracking-tight">
                            <span className="text-gray-400 text-xs">📞</span>
                            <span>{member.phone}</span>
                          </div>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-16 text-center border border-slate-100 text-slate-400 font-medium">
            ❌ দুঃখিত! এই ক্যাটাগরিতে এই নামের কোনো তথ্য খুঁজে পাওয়া যায়নি।
          </div>
        )}

        {/* নিচের অতিরিক্ত ইনফো প্যানেল */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-xs">
          <div>
            <h2 className="text-base md:text-lg font-bold mb-1.5 flex items-center gap-2">🏫 Office Operating Hours</h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              যেকোনো অফিশিয়াল প্রয়োজনে সরাসরি যোগাযোগ করার সময়সূচী: <br />
              <strong>শনিবার থেকে বৃহস্পতিবার:</strong> সকাল ৯:০০ টা — বিকাল ৪:০০ টা পর্যন্ত।
            </p>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <h2 className="text-base md:text-lg font-bold mb-1.5 flex items-center gap-2">📞 Helpline Support</h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              জরুরি হেল্পলাইন নম্বর: <strong className="text-white">+880 1712-345678</strong> <br />
              অফিশিয়াল ইমেইল সাপোর্ট: <span className="text-blue-400 underline font-medium">complaint@school.edu.bd</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Office;