import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full font-sans bg-white flex flex-col">
      
      {/* <div className="bg-[#0f2d59] text-white text-xs py-2 px-6 flex justify-between items-center border-b border-slate-700">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 font-medium tracking-wide">
            📞 +8801627312846
          </span>
          <span className="flex items-center gap-1.5 font-medium tracking-wide hidden md:inline border-l border-slate-600 pl-5">
            ✉️ info@raschool.edu.bd
          </span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <a href="#facebook" className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px] hover:bg-blue-700 transition">
              f
            </a>
            <a href="#youtube" className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-[10px] hover:bg-red-700 transition">
              ▶
            </a>
          </div>
          <span className="font-bold text-[11px] border-l border-slate-600 pl-5 tracking-wider text-amber-400">
            EIIN: 108359
          </span>
        </div>
      </div>
      <div 
        className="relative h-[140px] md:h-[180px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 45, 89, 0.85), rgba(15, 45, 89, 0.9)), url('https://wlfsc.edu.bd/wp-content/uploads/2025/11/imgi_17_ban1.jpg')` 
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-3 px-6 text-white max-w-[1200px] w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-xl md:text-4xl font-black tracking-tight uppercase text-white drop-shadow-md">
              RA School and College
            </h1>
            <p className="text-[10px] md:text-sm font-medium tracking-widest text-amber-400 uppercase mt-1">
              Excellence in Education • Founded Integrity
            </p>
          </div>
        </div>
      </div> */}

      <nav 
        className={`w-full bg-white border-b border-slate-200 text-slate-800 transition-all duration-200 ${
          isScrolled 
            ? 'fixed top-0 max-w-[1138px] z-[999] shadow-lg backdrop-blur-md bg-white/95 animate-fadeIn' 
            : 'relative shadow-xs'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between md:justify-center items-center min-h-[50px] relative">
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-slate-700 focus:outline-hidden ml-auto p-2 cursor-pointer font-bold border border-slate-200 rounded-xs my-1"
          >
            {isOpen ? 'CLOSE ✕' : 'MENU ☰'}
          </button>
          <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-white flex flex-col md:flex-row items-stretch md:items-center text-xs md:text-[13px] font-extrabold shadow-2xl md:shadow-none transition-all duration-300 z-[999] divide-y md:divide-y-0 md:divide-x divide-slate-100 uppercase tracking-wider ${isOpen ? 'block' : 'hidden md:flex'}`}>
            
            <Link to="/" className="px-4 py-3.5 hover:bg-slate-50 text-center text-[#0f2d59] transition">
              Home
            </Link>
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('campus')}
                className="w-full md:w-auto px-4 py-3.5 hover:bg-slate-50 flex justify-center items-center gap-1 cursor-pointer text-[#0f2d59]"
              >
                <span>Campus</span>
                <span className="text-[8px] text-slate-400 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className={`hidden md:absolute left-0 mt-0 w-48 bg-white text-slate-700 shadow-xl border border-slate-200 md:group-hover:block z-[1000] ${activeDropdown === 'campus' ? '!block' : ''}`}>
                <Link to="/about" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 border-b border-slate-100 transition">About Us</Link>
                <Link to="/aims" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 border-b border-slate-100 transition">Mission & Vision</Link>
                <Link to="/gallery" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 transition">Media Gallery</Link>
              </div>
            </div>
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('admission')}
                className="w-full md:w-auto px-4 py-3.5 hover:bg-slate-50 flex justify-center items-center gap-1 cursor-pointer text-[#0f2d59]"
              >
                <span>Admissions</span>
                <span className="text-[8px] text-slate-400 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className={`hidden md:absolute left-0 mt-0 w-48 bg-white text-slate-700 shadow-xl border border-slate-200 md:group-hover:block z-[1000] ${activeDropdown === 'admission' ? '!block' : ''}`}>
                <Link to="/admission-info" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 border-b border-slate-100 transition">Admission Guide</Link>
                <Link to="/admission" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 transition">Apply Online</Link>
              </div>
            </div>
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('office')}
                className="w-full md:w-auto px-4 py-3.5 hover:bg-slate-50 flex justify-center items-center gap-1 cursor-pointer text-[#0f2d59]"
              >
                <span>Administration</span>
                <span className="text-[8px] text-slate-400 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className={`hidden md:absolute left-0 mt-0 w-48 bg-white text-slate-700 shadow-xl border border-slate-200 md:group-hover:block z-[1000] ${activeDropdown === 'office' ? '!block' : ''}`}>
                <Link to="/office" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 border-b border-slate-100 transition">Faculty Directory</Link>
                <Link to="/committee" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 transition">Governing Board</Link>
              </div>
            </div>
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('gallery')}
                className="w-full md:w-auto px-4 py-3.5 hover:bg-slate-50 flex justify-center items-center gap-1 cursor-pointer text-[#0f2d59]"
              >
                <span>Gallery</span>
                <span className="text-[8px] text-slate-400 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className={`hidden md:absolute left-0 mt-0 w-48 bg-white text-slate-700 shadow-xl border border-slate-200 md:group-hover:block z-[1000] ${activeDropdown === 'gallery' ? '!block' : ''}`}>
                <Link to="/gallery" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 border-b border-slate-100 transition">Photo Albums</Link>
                <Link to="/video-gallery" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 transition">Video Channels</Link>
              </div>
            </div>

            <Link to="/notice" className="px-4 py-3.5 hover:bg-slate-50 text-center text-[#0f2d59] transition">
              Notice Board
            </Link>
            
            <Link to="/contact" className="px-4 py-3.5 hover:bg-slate-50 text-center text-[#0f2d59] transition">
              Contact Us
            </Link>
            
            <Link to="/login-options" className="px-5 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-center transition font-black">
              Portal Login 🔑
            </Link>

          </div>
        </div>
      </nav>
      
      {isScrolled && <div className="h-[50px] w-full bg-transparent"></div>}

    </header>
  );
}

export default Navbar;