import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header className="w-full font-sans shadow-sm">
      <div className="bg-[#1e3a8a] text-white text-xs sm:text-sm py-2 px-4 flex justify-between items-center border-b border-blue-800">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            📞 +8801627312846
          </span>
          <span className="flex items-center gap-1 hidden md:inline">
            ✉️ RaSchool.edu.bd
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="#facebook" className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] hover:bg-red-600 transition">
              f
            </a>
            <a href="#youtube" className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] hover:bg-red-600 transition">
              ▶
            </a>
          </div>
          <span className="font-bold text-xs border-l border-blue-700 pl-3">
            EIIN : 108359
          </span>
        </div>
      </div>

     
      <div 
        className="relative h-[200px] md:h-[280px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url('https://wlfsc.edu.bd/wp-content/uploads/2025/11/imgi_17_ban1.jpg')` 
        }}
      >
        <div className="flex items-center gap-4 px-6 text-white text-center md:text-left flex-col md:flex-row">
        
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white p-1 rounded-full flex items-center justify-center shadow-lg shrink-0">
            <img 
              src="https://wlfsc.edu.bd/wp-content/uploads/2025/11/imgi_10_ban6.jpg" 
              alt="School Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold tracking-tight drop-shadow-md">
              RA School and College
            </h1>
          </div>
        </div>
      </div>

      <nav className="bg-white border-y border-slate-200 sticky top-0 z-50 text-slate-800">
        <div className="px-2 flex justify-center items-center min-h-[44px] relative">
        
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-xl text-slate-700 focus:outline-none ml-auto p-2 cursor-pointer"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-white flex flex-col md:flex-row items-stretch md:items-center text-xs md:text-[13px] font-bold shadow-lg md:shadow-none transition-all duration-300 z-50 divide-y md:divide-y-0 md:divide-x divide-slate-200 ${isOpen ? 'block' : 'hidden md:flex'}`}>
            
            <Link to="/" className="px-3 py-2.5 hover:bg-slate-50 text-center transition">হোম</Link>
           
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('campus')}
                className="w-full md:w-auto px-3 py-2.5 hover:bg-slate-50 flex justify-center items-center gap-1 cursor-pointer"
              >
                <span>ক্যাম্পাস</span>
                <span className="text-[9px] text-slate-500 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className={`md:absolute left-0 mt-0 w-44 bg-white text-slate-700 shadow-xl border border-slate-200 md:hidden md:group-hover:block ${activeDropdown === 'campus' ? '!block' : ''}`}>
                <Link to="/about" className="block px-4 py-2 hover:bg-slate-100 border-b border-slate-100">আমাদের সম্পর্কে</Link>
                <Link to="/aims" className="block px-4 py-2 hover:bg-slate-100 border-b border-slate-100">লক্ষ্য ও উদ্দেশ্য</Link>
                <Link to="/gallery" className="block px-4 py-2 hover:bg-slate-100">ফটো গ্যালারি</Link>
              </div>
            </div>

            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('admission')}
                className="w-full md:w-auto px-3 py-2.5 hover:bg-slate-50 flex justify-center items-center gap-1 cursor-pointer"
              >
                <span>ভর্তি</span>
                <span className="text-[9px] text-slate-500 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className={`md:absolute left-0 mt-0 w-44 bg-white text-slate-700 shadow-xl border border-slate-200 md:hidden md:group-hover:block ${activeDropdown === 'admission' ? '!block' : ''}`}>
                <Link to="/admission-info" className="block px-4 py-2 hover:bg-slate-100 border-b border-slate-100">ভর্তি বিজ্ঞপ্তি</Link>
                <Link to="/admission" className="block px-4 py-2 hover:bg-slate-100">অনলাইন আবেদন</Link>
              </div>
            </div>

            {/* <Link to="/institution-admission" className="px-3 py-2.5 hover:bg-slate-50 text-center transition">প্রাতিষ্ঠানিক ভর্তির লিংক</Link>
            <Link to="/moushi-admission" className="px-3 py-2.5 hover:bg-slate-50 text-center transition">মাউশি কর্তৃক ভর্তির লিংক</Link> */}
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('office')}
                className="w-full md:w-auto px-3 py-2.5 hover:bg-slate-50 flex justify-center items-center gap-1 cursor-pointer"
              >
                <span>প্রশাসন</span>
                <span className="text-[9px] text-slate-500 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className={`md:absolute left-0 mt-0 w-44 bg-white text-slate-700 shadow-xl border border-slate-200 md:hidden md:group-hover:block ${activeDropdown === 'office' ? '!block' : ''}`}>
                <Link to="/office" className="block px-4 py-2 hover:bg-slate-100 border-b border-slate-100">শিক্ষকদের তথ্য</Link>
                <Link to="/committee" className="block px-4 py-2 hover:bg-slate-100">কমিটি</Link>
              </div>
            </div>

            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('gallery')}
                className="w-full md:w-auto px-3 py-2.5 hover:bg-slate-50 flex justify-center items-center gap-1 cursor-pointer"
              >
                <span>গ্যালারি</span>
                <span className="text-[9px] text-slate-500 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className={`md:absolute left-0 mt-0 w-44 bg-white text-slate-700 shadow-xl border border-slate-200 md:hidden md:group-hover:block ${activeDropdown === 'gallery' ? '!block' : ''}`}>
                <Link to="/gallery" className="block px-4 py-2 hover:bg-slate-100 border-b border-slate-100">ছবি গ্যালারি</Link>
                <Link to="/video-gallery" className="block px-4 py-2 hover:bg-slate-100">ভিডিও গ্যালারি</Link>
              </div>
            </div>

            <Link to="/notice" className="px-3 py-2.5 hover:bg-slate-50 text-center transition">নোটিশ কর্নার</Link>
            <Link to="/contact" className="px-3 py-2.5 hover:bg-slate-50 text-center transition">যোগাযোগ</Link>
            <Link to="/login-options" className="px-3 py-2.5 hover:bg-slate-50 text-center text-blue-800 transition"> লগইন</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;