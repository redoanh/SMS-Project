import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Notice() {
  const [notices, setNotices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // ফিল্টার স্টেট
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*
    fetch('http://127.0.0.1:8000/api/notices')
      .then(res => res.json())
      .then(data => { setNotices(data); setLoading(false); });
    */

    setTimeout(() => {
      setNotices([
        { id: 1, title: "Half-Yearly Exam Schedule 2026 Out Now", date: "2026-06-15", category: "Exam", description: "All students are requested to collect their exam admit cards from the office before June 30." },
        { id: 2, title: "Admission Open for Session 2026-2027", date: "2026-06-10", category: "Admission", description: "Online admission applications are now open for classes 1 to 10. Apply through the portal." },
        { id: 3, title: "Upcoming Online Training Session for Teachers", date: "2026-06-02", category: "Academic", description: "A mandatory ICT training session for all faculty members will be held on Google Meet." },
        { id: 4, title: "Summer Vacation Holidays Announcement", date: "2026-05-25", category: "Holiday", description: "The school will remain closed from July 1 to July 10 for summer vacation." },
        { id: 5, title: "Internal Academic Result Publication 2026", date: "2026-05-20", category: "Result", description: "Results of the first term tutorial examinations have been published on the student portal." }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  // 🔍 সার্চ কুয়েরি এবং ক্যাটাগরি ফিল্টার একসাথে হ্যান্ডেল করা
  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // ডাইনামিক ইউনিক ক্যাটাগরি লিস্ট তৈরি (ড্রপডাউনের জন্য)
  const categories = ['All', 'Exam', 'Admission', 'Academic', 'Holiday', 'Result'];

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-10 px-4 font-sans">
      <div className="max-w-[1000px] mx-auto">

        {/* সার্চ এবং ফিল্টার সেকশন */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1e3a8a]">Notice Board</h1>
            <p className="text-gray-500 text-sm mt-1">সবশেষ প্রাতিষ্ঠানিক নোটিশ ও আপডেটসমূহ এখানে পাবেন।</p>
          </div>
          
          {/* সার্চ ইনপুট এবং ফিল্টার ড্রপডাউন কন্টেইনার */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* ক্যাটাগরি ফিল্টার ড্রপডাউন */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-40 border border-gray-300 rounded-lg pl-3 pr-8 py-2 bg-white focus:outline-none focus:border-blue-500 transition text-sm font-medium text-gray-700 appearance-none cursor-pointer"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat === 'All' ? '📁 All Categories' : cat}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-3 text-gray-400 text-xs pointer-events-none">▼</span>
            </div>

            {/* সার্চ বার */}
            <div className="relative flex-1 sm:w-64">
              <input 
                type="text" 
                placeholder="Search notices..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:border-blue-500 transition text-sm"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
        </div>
        
        {/* নোটিশ লিস্ট সেকশন */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center p-10 bg-white rounded-xl shadow-sm text-gray-500 animate-pulse">Loading Notice Board...</div>
          ) : filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div key={notice.id} className="bg-white p-6 rounded-xl shadow-xs border-l-4 border-red-500 hover:shadow-md transition duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-50 text-red-600 font-bold text-xs px-2.5 py-1 rounded-md">
                    {notice.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">📅 {notice.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer transition mb-2">
                  {notice.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{notice.description}</p>
                <Link to={`/notice/${notice.id}`} className="text-sm font-bold text-[#1e3a8a] hover:underline">
                  Read Full Notice →
                </Link>
              </div>
            ))
          ) : (
            <div className="bg-white p-12 text-center rounded-xl text-gray-500">কোনো নোটিশ খুঁজে পাওয়া যায়নি।</div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Notice;