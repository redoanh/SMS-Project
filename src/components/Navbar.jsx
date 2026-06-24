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
        ...
      </div>
      <div className="relative h-[140px] md:h-[180px] bg-cover bg-center flex items-center justify-center" ...>
        ...
      </div> 
      */}

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
                <Link to="/admissionguidline" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 border-b border-slate-100 transition">Admission Guide</Link>
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
                <Link to="/facultydirectory" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 border-b border-slate-100 transition">Faculty Directory</Link>
                <Link to="/governingboard" className="block px-4 py-2.5 text-[11px] hover:bg-slate-50 transition">Governing Board</Link>
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

            <Link to="/careers" className="px-4 py-3.5 hover:bg-slate-50 text-center text-[#0f2d59] transition whitespace-nowrap">
              Career Opportunity
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