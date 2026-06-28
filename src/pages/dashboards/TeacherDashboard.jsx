import React from 'react';

const TeacherDashboard = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans flex">
            {/* সাইডবার */}
            <div className="w-64 bg-indigo-950 text-white p-5 space-y-6 hidden md:block">
                <h2 className="text-xl font-black text-indigo-400">Teacher Portal</h2>
                <div className="space-y-2 text-sm">
                    <div className="bg-indigo-700 px-4 py-2.5 rounded-xl font-bold">📊 Dashboard</div>
                    <div className="text-indigo-300 px-4 py-2.5 rounded-xl cursor-not-allowed hover:bg-indigo-900">👥 My Classes</div>
                    <div className="text-indigo-300 px-4 py-2.5 rounded-xl cursor-not-allowed hover:bg-indigo-900">📝 Marks Entry</div>
                </div>
            </div>

            {/* মেইন কন্টেন্ট */}
            <div className="flex-1 p-6 md:p-8">
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm mb-6">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Welcome, Faculty Member Panel</h1>
                        <p className="text-xs text-gray-400">Academic Year: 2026</p>
                    </div>
                    <button onClick={() => window.location.href = '/'} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-xl text-xs font-bold">
                        Logout 🚪
                    </button>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                    <h2 className="font-bold text-gray-800">Quick Academic Actions</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">শিক্ষক ড্যাশবোর্ড মডিউলে আপনাকে স্বাগতম। এখান থেকে আপনি স্টুডেন্টদের এটেনডেন্স, রেজাল্ট ইনপুট এবং ক্লাস রুটিন মডিউলগুলো মেইনটেইন করতে পারবেন।</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                        <div className="p-4 bg-purple-50 border border-purple-100 rounded-2xl text-center cursor-pointer hover:shadow-sm">
                            <span className="text-2xl">📝</span>
                            <h4 className="font-bold text-purple-700 text-xs mt-2">Exam Grade Input</h4>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-100 rounded-2xl text-center cursor-pointer hover:shadow-sm">
                            <span className="text-2xl">📅</span>
                            <h4 className="font-bold text-green-700 text-xs mt-2">View Class Schedules</h4>
                        </div>
                        <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl text-center cursor-pointer hover:shadow-sm">
                            <span className="text-2xl">👥</span>
                            <h4 className="font-bold text-orange-700 text-xs mt-2">Daily Attendance</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;