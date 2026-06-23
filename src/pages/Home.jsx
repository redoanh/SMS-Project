import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [notices, setNotices] = useState([]);
  const [marqueeText, setMarqueeText] = useState("Loading alerts...");
  const [loading, setLoading] = useState(true);

  const sliderImages = [
    "https://wlfsc.edu.bd/wp-content/uploads/2025/11/imgi_10_ban6.jpg",
    "https://wlfsc.edu.bd/wp-content/uploads/2025/11/imgi_17_ban1.jpg",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1400",
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1400"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotices([
        { id: 1, title: "Mid-Term / Pre-Test Examination Routine 2026 & Guidelines (Bangla & English Version)", date: "14/06/2026" },
        { id: 2, title: "Urgent Notice: Registration Card Correction for Class 6 Students (2026 Academic Year)", date: "19/04/2026" },
        { id: 3, title: "Important Notice Regarding Upcoming Tutorial & Class Tests", date: "15/04/2026" },
        { id: 4, title: "Class Test (Half Yearly) Routine 2026 - English Medium Campus", date: "09/04/2026" }
      ]);
      setMarqueeText("*** Urgent Notice: Half-Yearly Examinations 2026 will commence on the 10th of next month. Please check the Notice Board and download your respective schedules from the routine section. ***");
      setLoading(false);
    }, 400);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
    };
  }, [sliderImages.length]);

  const categoryBoxes = [
    {
      title: "CAMPUS LIFE",
      icon: "🏫",
      links: [
        { label: "About Our Institution", to: "/about" },
        { label: "Mission & Vision", to: "/aims" },
        { label: "Photo Gallery", to: "/gallery" },
        { label: "Video Archive", to: "/video-gallery" }
      ]
    },
    {
      title: "ADMISSIONS",
      icon: "📝",
      links: [
        { label: "Admission Circular", to: "/admission-info" },
        { label: "Apply Online", to: "/admission" },
        { label: "Download Admission Form", to: "/admission-form" },
        { label: "Entrance Exam Schedule", to: "/admission-exam" },
        { label: "Admission Policy", to: "/admission-policy" }
      ]
    },
    {
      title: "ADMINISTRATION",
      icon: "🎓",
      links: [
        { label: "Faculty Members", to: "/office?tab=Teacher" },
        { label: "Office & Support Staff", to: "/office?tab=Staff" },
        { label: "Governing Committee", to: "/committee" }
      ]
    },
    {
      title: "ACADEMICS",
      icon: "📚",
      links: [
        { label: "Academic Calendar", to: "/calendar" },
        { label: "Exam Routines", to: "/routine" },
        { label: "Class Schedules", to: "/class-routine" },
        { label: "Holiday List", to: "/holidays" },
        { label: "Educational Blog", to: "/blogs" }
      ]
    },
    {
      title: "STUDENTS",
      icon: "👨‍🎓",
      links: [
        { label: "Student Directory", to: "/students" },
        { label: "Dress Code & Uniform", to: "/uniform" },
        { label: "Grading & Exam System", to: "/exam-system" },
        { label: "Rules & Regulations", to: "/rules" },
        { label: "Student Success Stories", to: "/success-stories" }
      ]
    },
    {
      title: "PORTAL & RESULTS",
      icon: "📊",
      links: [
        { label: "Internal Exam Results", to: "/result" },
        { label: "Board Exam Results", to: "/board-result" },
        { label: "National University Results", to: "/nu-result" }
      ]
    },
    {
      title: "RESOURCES",
      icon: "💡",
      links: [
        { label: "Digital Class Content", to: "/digital-content" },
        { label: "Central Library", to: "/library" },
        { label: "Computer Lab Facilities", to: "/computer-lab" },
        { label: "Sports & Playground", to: "/playground" },
        { label: "ICT & Coding Club", to: "/ict-club" }
      ]
    },
    {
      title: "DEPARTMENTS",
      icon: "🏢",
      links: [
        { label: "Department of Bangla", to: "/dept-bangla" },
        { label: "Department of Political Science", to: "/dept-political" },
        { label: "Department of Sociology", to: "/dept-sociology" },
        { label: "Department of Management", to: "/dept-management" }
      ]
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen font-sans pb-20 overflow-x-hidden">
      
      <div className="bg-amber-500 text-white p-2.5 flex items-center shadow-xs max-w-[1240px] mx-auto w-full">
        <span className="bg-white text-amber-600 px-3 py-0.5 font-extrabold mr-3 rounded text-[10px] md:text-xs uppercase tracking-wider shrink-0 shadow-xs">
          Notice
        </span>
        <marquee scrollamount="5" className="text-xs md:text-sm font-semibold">
          {marqueeText}
        </marquee>
      </div>

      <div className="relative w-full h-[460px] md:h-[540px] bg-slate-900 overflow-hidden flex items-center">
        
        {sliderImages.map((imgUrl, index) => (
          <img 
            key={index}
            src={imgUrl} 
            alt={`University Campus Banner ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-45 z-0 animate-[pulse_8s_infinite_alternate]' : 'opacity-0 z-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10"></div>
        
        <div className="relative max-w-[1240px] w-full mx-auto px-4 md:px-8 flex flex-col items-start text-white z-20 mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4 max-w-2xl drop-shadow-md uppercase">
            {/* Step Up With <br /> */} I lover my  <br />
            <span className="text-amber-400">Wife</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-300 max-w-md mb-8 drop-shadow-xs leading-relaxed">
            Discover exceptional educational resources, world-class faculty portfolios, and programs curated for your bright future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button 
              onClick={() => navigate('/admission')}
              className="w-full sm:w-auto bg-[#0f2d59] hover:bg-[#153b70] active:scale-[0.99] text-white border border-slate-600 text-xs font-bold uppercase tracking-wider px-6 md:px-8 py-3.5 transition duration-150 shadow-lg text-center cursor-pointer"
            >
              Apply for Admission
            </button>
            <button 
              onClick={() => navigate('/admission-info')}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 active:scale-[0.99] text-slate-900 text-xs font-bold uppercase tracking-wider px-6 md:px-8 py-3.5 transition duration-150 shadow-lg text-center cursor-pointer"
            >
              International Applicants
            </button>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-400 w-5' : 'bg-slate-400/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 px-4">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-none shadow-xs border border-slate-200 overflow-hidden">
            <div className="bg-[#0f2d59] text-white px-4 md:px-5 py-4 flex justify-between items-center border-b-2 border-amber-500">
              <h3 className="font-extrabold text-xs md:text-sm tracking-wider uppercase flex items-center gap-2">
                📋 Official Notice Board
              </h3>
              <Link to="/notice" className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 px-3 py-1 rounded-xs text-[11px] font-bold uppercase tracking-tight transition duration-150">
                View All
              </Link>
            </div>

            {loading ? (
              <div className="p-12 text-center text-slate-400 text-sm font-medium">Fetching active alerts...</div>
            ) : (
              <div className="w-full overflow-x-auto min-w-full block">
                <table className="w-full text-left border-collapse min-w-[500px] md:min-w-0">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-[10px] md:text-[11px] uppercase tracking-wider font-bold border-b border-slate-200">
                      <th className="p-4 w-[60%] md:w-[65%]">Subject / Notice Title</th>
                      <th className="p-4 text-center w-[20%]">Date</th>
                      <th className="p-4 text-center w-[20%]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm text-slate-700 divide-y divide-slate-100">
                    {notices.map((notice) => (
                      <tr key={notice.id} className="hover:bg-slate-50/50 transition">
                        <td className="p-4 font-semibold text-slate-800 leading-normal">
                          {notice.title}
                        </td>
                        <td className="p-4 text-center text-slate-500 font-mono text-xs whitespace-nowrap">
                          {notice.date}
                        </td>
                        <td className="p-4 text-center">
                          <Link 
                            to={`/notice/${notice.id}`} 
                            className="border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white active:scale-95 px-3 py-1 font-bold text-[11px] uppercase tracking-tighter inline-block transition duration-150"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categoryBoxes.map((box, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-5 flex gap-4 hover:border-slate-400 transition duration-150">        
                <div className="text-2xl bg-slate-50 w-12 h-12 rounded-none flex items-center justify-center border border-slate-100 shrink-0 select-none">
                  {box.icon}
                </div>
                <div className="space-y-2 w-full min-w-0">
                  <h4 className="font-extrabold text-[#0f2d59] text-xs uppercase tracking-wider border-b border-slate-100 pb-1.5 truncate">
                    {box.title}
                  </h4>
                  <ul className="space-y-2 text-xs font-semibold text-slate-600">
                    {box.links.map((link, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-1.5 hover:text-amber-600 transition duration-100">
                        <span className="text-slate-300 text-[8px] mt-1 shrink-0">■</span>
                        <Link to={link.to} className="hover:underline line-clamp-1">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 text-center p-5 shadow-xs">
            <div className="bg-slate-100 text-slate-700 font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 mb-4">
              Secretary (Rtd.), Govt. of Bangladesh
            </div>
            <div className="w-32 h-40 bg-slate-100 mx-auto overflow-hidden border border-slate-200 mb-3">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5635AQHzIPM22rnAxA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1712137593412?e=1782820800&v=beta&t=V3g72dU1ZrUv76NFPc4CYEAPN-5G1FwZEx-h9Awe6HU" 
                alt="Secretary Profile Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm tracking-tight">Redoan Hossain</h4>
          </div>

          <div className="bg-white border border-slate-200 text-center p-5 shadow-xs">
            <div className="bg-slate-100 text-slate-700 font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 mb-4">
              Principal (Acting)
            </div>
            <div className="w-32 h-40 bg-slate-100 mx-auto overflow-hidden border border-slate-200 mb-3">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGy54kfXbRSSQ/profile-displayphoto-scale_400_400/B4EZp4qmO8GUAg-/0/1762961026028?e=1783555200&v=beta&t=fE7mEJ9qo7DVBMdUzeQVT_eYIHzy_gT4alNgHWxvovg" 
                alt="Principal Profile Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm tracking-tight">Mofazzel Hossain</h4>
          </div>

          <div className="bg-white border border-slate-200 shadow-xs">
            <div className="bg-[#0f2d59] text-white px-4 py-2 font-bold text-[10px] uppercase tracking-wider text-center">
              National Anthem
            </div>
            <div className="p-3 flex justify-center bg-slate-50">
              <audio controls className="w-full h-8 outline-hidden">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Your browser does not support the audio component.
              </audio>
            </div>
          </div>

          <div className="bg-white border border-slate-200 overflow-hidden shadow-xs">
            <div className="bg-rose-600 text-white px-4 py-2.5 font-bold text-[10px] text-center tracking-wider uppercase">
              Emergency Hotlines
            </div>
            <div className="p-3 bg-slate-50/50 space-y-2 text-xs font-bold text-white">
              <div className="bg-purple-700 p-2 flex justify-between px-4 items-center rounded-xs transition hover:opacity-95">
                <span>National Services</span> <span className="text-sm font-black">333</span>
              </div>
              <div className="bg-red-600 p-2 flex justify-between px-4 items-center rounded-xs transition hover:opacity-95">
                <span>Emergency Help</span> <span className="text-sm font-black">999</span>
              </div>
              <div className="bg-orange-500 p-2 flex justify-between px-4 items-center rounded-xs transition hover:opacity-95">
                <span>Women & Child Help</span> <span className="text-sm font-black">109</span>
              </div>
              <div className="bg-blue-600 p-2 flex justify-between px-4 items-center rounded-xs transition hover:opacity-95">
                <span>ACC Anti-Corruption</span> <span className="text-sm font-black">106</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-3 text-center shadow-xs">
            <div className="bg-slate-800 text-white font-bold text-[10px] uppercase tracking-wider py-1 mb-2">
              Government Portal
            </div>
            <a href="https://www.mygov.bd/" target="_blank" rel="noreferrer" className="block border border-slate-200 p-2 bg-slate-50 hover:bg-slate-100 transition duration-150">
              <div className="font-extrabold text-emerald-600 text-xs uppercase tracking-tight">myGov Bangladesh</div>
              <p className="text-[9px] text-slate-400 font-medium">All Services in One Platform</p>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto text-center mt-16 pt-8 border-t border-slate-200 px-4">
        <h2 className="text-xl md:text-3xl font-black text-[#0f2d59] uppercase tracking-tight">
          Our Honored Faculty Members
        </h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-3"></div>

        <div className="mt-8">
          <button
            onClick={() => navigate('/office')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0f2d59] hover:bg-[#1a447c] active:scale-95 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Explore Faculty Directories</span>
            <span className="text-xs">➔</span>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Home;