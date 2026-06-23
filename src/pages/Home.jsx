import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [notices, setNotices] = useState([]);
  const [marqueeText, setMarqueeText] = useState("লোড হচ্ছে...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    
    setTimeout(() => {
   
      setNotices([
        { id: 1, title: "অর্ধ বার্ষিক / প্রাক নির্বাচনী পরীক্ষার রুটিন ২০২৬ ও নোটিশ (বাংলা মাধ্যম, ইংরেজি মাধ্যম ও ইংলিশ ভার্সন)", date: "14/06/2026" },
        { id: 2, title: "২০২৬ শিক্ষাবর্ষে ৬ষ্ঠ শ্রেণিতে অধ্যয়নরত শিক্ষার্থীদের রেজিস্ট্রেশন কার্ড সংশোধন সংক্রান্ত নোটিশ", date: "19/04/2026" },
        { id: 3, title: "টিউটোরিয়াল পরীক্ষা/класс টেস্ট সংক্রান্ত জরুরী নোটিশ", date: "15/04/2026" },
        { id: 4, title: "Class Test (Half Yearly) Routine 2026, English Medium", date: "09/04/2026" }
      ]);
      setMarqueeText("*** জরুরী বিজ্ঞপ্তি: অর্ถมศึกษา পরীক্ষা ২০২৬ আগামী মাসের ১০ তারিখ থেকে শুরু হতে যাচ্ছে। বিস্তারিত জানতে নোটিশ বোর্ড এবং রুটিন ডাউনলোড সেকশন দেখুন। ***");
      setLoading(false);
    }, 400);
  }, []);
  const categoryBoxes = [
    {
      title: "ক্যাম্পাস",
      icon: "🏫",
      links: [
        { label: "আমাদের সম্পর্কে", to: "/about" },
        { label: "লক্ষ্য ও উদ্দেশ্য", to: "/aims" },
        { label: "ফটো গ্যালারি", to: "/gallery" },
        { label: "ভিডিও গ্যালারি", to: "/video-gallery" }
      ]
    },
    {
      title: "ভর্তি",
      icon: "📝",
      links: [
        { label: "ভর্তি বিজ্ঞপ্তি", to: "/admission-info" },
        { label: "আবেদন করুন", to: "/admission" },
        { label: "ভর্তি ফরম", to: "/admission-form" },
        { label: "ভর্তি পরীক্ষা", to: "/admission-exam" },
        { label: "ভর্তি নীতি", to: "/admission-policy" }
      ]
    },
    {
      title: "প্রশাসন",
      icon: "🎓",
      links: [
        { label: "শিক্ষকদের তথ্য", to: "/office?tab=Teacher" },
        { label: "স্টাফদের তথ্য", to: "/office?tab=Staff" },
        { label: "কমিটির সদস্য", to: "/committee" }
      ]
    },
    {
      title: "একাডেমিক কার্যক্রম",
      icon: "📚",
      links: [
        { label: "একাডেমিক ক্যালেন্ডার", to: "/calendar" },
        { label: "পরীক্ষার রুটিন", to: "/routine" },
        { label: "ক্লাস রুটিন", to: "/class-routine" },
        { label: "ছুটির তালিকা", to: "/holidays" },
        { label: "ব্লগ পোস্ট", to: "/blogs" }
      ]
    },
    {
      title: "শিক্ষার্থী",
      icon: "👨‍🎓",
      links: [
        { label: "আমাদের শিক্ষার্থী", to: "/students" },
        { label: "শিক্ষার্থী ইউনিফর্ম", to: "/uniform" },
        { label: "পরীক্ষা ব্যবস্থা", to: "/exam-system" },
        { label: "নিয়ম এবং প্রবিধান", to: "/rules" },
        { label: "শিক্ষার্থীদের সাফল্যের গল্প", to: "/success-stories" }
      ]
    },
    {
      title: "ফলাফল",
      icon: "📊",
      links: [
        { label: "অভ্যন্তরীণ পরীক্ষার ফলাফল", to: "/result" },
        { label: "বোর্ড পরীক্ষার ফলাফল", to: "/board-result" },
        { label: "জাতীয় বিশ্ববিদ্যালয়ের ফলাফল", to: "/nu-result" }
      ]
    },
    {
      title: "রিসোর্স",
      icon: "💡",
      links: [
        { label: "ডিজিটাল ক্লাস কনটেন্ট", to: "/digital-content" },
        { label: "গ্রন্থাগার (Library)", to: "/library" },
        { label: "কম্পিউটার ল্যাব", to: "/computer-lab" },
        { label: "খেলার মাঠ", to: "/playground" },
        { label: "আইসিটি ক্লাব", to: "/ict-club" }
      ]
    },
    {
      title: "গ্যালারি",
      icon: "🖼️",
      links: [
        { label: "ছবি গ্যালারি", to: "/gallery" },
        { label: "ভিডিও গ্যালারি", to: "/video-gallery" }
      ]
    },
    {
      title: "নোটিশ",
      icon: "📋",
      links: [
        { label: "নোটিশ", to: "/notice" },
        { label: "অফিস আদেশ", to: "/office-orders" },
        { label: "জব প্লেসমেন্ট", to: "/job-placement" },
        { label: "টেন্ডার্স", to: "/tenders" }
      ]
    },
    {
      title: "বিভাগসমূহ",
      icon: "🏢",
      links: [
        { label: "বাংলা বিভাগ", to: "/dept-bangla" },
        { label: "রাষ্ট্রবিজ্ঞান বিভাগ", to: "/dept-political" },
        { label: "সমাজবিজ্ঞান বিভাগ", to: "/dept-sociology" },
        { label: "ব্যবস্থাপনা বিভাগ", to: "/dept-management" }
      ]
    }
  ];

  return (
    <div className="bg-[#f4f6f9] text-[#333] min-h-screen font-sans pb-16">
 
      <div className="bg-[#ef4444] text-white p-2 flex items-center shadow-xs max-w-[1200px] mx-auto md:mt-4 md:rounded-lg">
        <span className="bg-white text-[#ef4444] px-3 py-0.5 font-bold mr-3 rounded text-xs shrink-0 shadow-xs">নোটিশ</span>
        <marquee scrollamount="5" className="text-sm font-medium">
          {marqueeText}
        </marquee>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 px-4">
        <div className="lg:col-span-2 space-y-6">

          <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-200">
            <div className="relative w-full h-[220px] md:h-[360px] bg-slate-300 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://wlfsc.edu.bd/wp-content/uploads/2025/11/imgi_10_ban6.jpg" 
                alt="Campus View" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white p-3 text-xs font-medium text-center">
                আমাদের প্রতিষ্ঠানের সাম্প্রতিক সমাবেশ ও প্রাতিষ্ঠানিক কার্যক্রম
              </div>
            </div>
            <div className="flex justify-center gap-1.5 mt-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-full border ${i === 1 ? 'bg-blue-600' : 'bg-slate-300'}`}></span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
            <div className="bg-[#1e3a8a] text-white px-4 py-3 flex justify-between items-center">
              <h3 className="font-bold text-sm md:text-base flex items-center gap-2">📋 নোটিশ বোর্ড</h3>
              <Link to="/notice" className="bg-[#ef4444] hover:bg-red-600 px-3 py-1 rounded text-xs font-bold transition">সকল নোটিশ</Link>
            </div>

            {loading ? (
              <div className="p-8 text-center text-slate-400 text-sm">নোটিশ লোড হচ্ছে...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 text-xs font-bold border-b border-slate-200 text-center">
                      <th className="p-3 text-left w-[65%]">Subject</th>
                      <th className="p-3">Date Published</th>
                      <th className="p-3">Link</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm text-slate-700 divide-y divide-slate-100">
                    {notices.map((notice) => (
                      <tr key={notice.id} className="hover:bg-slate-50/60 transition">
                        <td className="p-3 font-medium text-slate-800 text-left line-clamp-2 md:line-clamp-none">
                          {notice.title}
                        </td>
                        <td className="p-3 text-center text-slate-500 font-mono text-xs whitespace-nowrap">
                          {notice.date}
                        </td>
                        <td className="p-3 text-center">
                          <Link 
                            to={`/notice/${notice.id}`} 
                            className="bg-[#10b981] hover:bg-[#059669] text-white px-3 py-1 rounded font-bold text-xs inline-block transition"
                          >
                            view
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
              <div key={idx} className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-4 flex gap-4 hover:shadow-xs transition duration-200">        
                <div className="text-3xl bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center shadow-3xs shrink-0">
                  {box.icon}
                </div>
                <div className="space-y-1.5 w-full">
                  <h4 className="font-black text-slate-800 text-sm border-b border-slate-100 pb-1 mb-2 tracking-tight text-[#1e3a8a]">
                    {box.title}
                  </h4>
                  <ul className="space-y-1 text-xs font-medium text-slate-600">
                    {box.links.map((link, lIdx) => (
                      <li key={lIdx} className="flex items-center gap-1.5 hover:text-blue-600 transition">
                        <span className="text-green-600 text-[10px]">▶</span>
                        <Link to={link.to} className="hover:underline">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="space-y-6">

          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden text-center p-4">
            <div className="bg-[#164e63] text-white font-bold text-xs py-1.5 px-3 rounded mb-4">
              Secretary (Rtd.), Govt. of Bangladesh
            </div>
            <div className="w-32 h-40 bg-slate-200 mx-auto rounded-lg overflow-hidden border border-slate-100 shadow-2xs mb-3">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5635AQHzIPM22rnAxA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1712137593412?e=1782820800&v=beta&t=V3g72dU1ZrUv76NFPc4CYEAPN-5G1FwZEx-h9Awe6HU" 
                alt="Secretary Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm tracking-tight">Redoan Hossain </h4>
          </div>
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden text-center p-4">
            <div className="bg-[#164e63] text-white font-bold text-xs py-1.5 px-3 rounded mb-4">
              Principal (Acting)
            </div>
            <div className="w-32 h-40 bg-slate-200 mx-auto rounded-lg overflow-hidden border border-slate-100 shadow-2xs mb-3">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGy54kfXbRSSQ/profile-displayphoto-scale_400_400/B4EZp4qmO8GUAg-/0/1762961026028?e=1783555200&v=beta&t=fE7mEJ9qo7DVBMdUzeQVT_eYIHzy_gT4alNgHWxvovg" 
                alt="Principal Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm tracking-tight">Mofazzel Hossain </h4>
          </div>
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
            <div className="bg-[#164e63] text-white px-4 py-2 font-bold text-xs text-center">
              জাতীয় সঙ্গীত
            </div>
            <div className="p-3 flex justify-center bg-slate-50">
              <audio controls className="w-full h-9">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
            <div className="bg-[#ef4444] text-white px-4 py-2.5 font-bold text-xs text-center tracking-wider uppercase">
              জরুরী হটলাইন
            </div>
            <div className="p-3 bg-slate-50/50 space-y-2 text-center text-xs font-bold text-white">
              <div className="bg-purple-700 p-2 rounded shadow-2xs flex justify-between px-4 items-center">
                <span>সরকারি তথ্য ও সেবা</span> <span className="text-sm font-black">৩৩৩</span>
              </div>
              <div className="bg-red-600 p-2 rounded shadow-2xs flex justify-between px-4 items-center">
                <span>জরুরি সেবা</span> <span className="text-sm font-black">৯৯৯</span>
              </div>
              <div className="bg-orange-500 p-2 rounded shadow-2xs flex justify-between px-4 items-center">
                <span>নারী ও শিশু নির্যাতন প্রতিরোধ</span> <span className="text-sm font-black">১০৯</span>
              </div>
              <div className="bg-blue-600 p-2 rounded shadow-2xs flex justify-between px-4 items-center">
                <span>দুদক হেল্পলাইন</span> <span className="text-sm font-black">১০৬</span>
              </div>
              <div className="bg-green-600 p-2 rounded shadow-2xs flex justify-between px-4 items-center">
                <span>দুর্যোগের আগাম বার্তা</span> <span className="text-sm font-black">১০৯০</span>
              </div>
              <div className="bg-cyan-600 p-2 rounded shadow-2xs flex justify-between px-4 items-center">
                <span>শিশু সহায়তা ফোন</span> <span className="text-sm font-black">১০৯৮</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden p-3 text-center">
            <div className="bg-[#164e63] text-white font-bold text-xs py-1 rounded mb-3">
              আমার সরকার
            </div>
            <a href="https://www.mygov.bd/" target="_blank" rel="noreferrer" className="block border border-slate-100 rounded-lg overflow-hidden p-2 bg-slate-50 hover:bg-slate-100 transition">
              <div className="font-black text-emerald-600 text-sm tracking-tighter">myGov (মাইগভ)</div>
              <p className="text-[10px] text-slate-400 font-medium">সব সেবা এক ঠিকানায়</p>
            </a>
          </div>

        </div>

      </div>
      <div className="max-w-[1200px] mx-auto text-center mt-12 pt-6 border-t border-slate-200">

      <h2 className="text-xl md:text-2xl font-black text-[#1e3a8a] tracking-tight">
        আমাদের শিক্ষক মণ্ডলী
      </h2>
      <div className="w-24 h-0.5 bg-[#ef4444] mx-auto mt-2"></div>

      <div className="mt-6">
        <button
          onClick={() => navigate('/office')}
          className="inline-flex items-center gap-2 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold text-sm px-6 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-250 cursor-pointer"
        >
          <span>সকল শিক্ষক মণ্ডলী দেখুন</span>
          <span className="text-xs">➔</span>
        </button>
      </div>
    </div>

    </div>
  );
}

export default Home;