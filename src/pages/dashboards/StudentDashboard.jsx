import React from 'react';

const StudentDashboard = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
            {/* টপ হেডার ন্যাপবার */}
            <div className="bg-emerald-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
                <div>
                    <h1 className="text-lg font-black tracking-wide">🎒 Student Information System</h1>
                    <p className="text-[11px] text-emerald-200">Active Profile Terminal</p>
                </div>
                <button onClick={() => window.location.href = '/'} className="bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-xl text-xs font-bold transition">
                    Sign Out 🚪
                </button>
            </div>

            {/* মেইন এরিয়া */}
            <div className="max-w-[1000px] w-full mx-auto p-6 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-inner">
                            S
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Student Profile Console</h2>
                            <p className="text-xs text-gray-400">Access your academic history records instantly</p>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold rounded-full text-xs">Status: Active Student</span>
                </div>

                {/* স্টুডেন্ট উইজেটস */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-2">
                        <div className="text-xl">📊</div>
                        <h3 className="font-bold text-gray-800 text-sm">Exam Report Cards</h3>
                        <p className="text-xs text-gray-400">View semester wise GPA & breakdown marks</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-2">
                        <div className="text-xl">💳</div>
                        <h3 className="font-bold text-gray-800 text-sm">Tuition Fees Ledger</h3>
                        <p className="text-xs text-gray-400">Track and pay your institutional bills</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-2">
                        <div className="text-xl">📢</div>
                        <h3 className="font-bold text-gray-800 text-sm">Class Notice Board</h3>
                        <p className="text-xs text-gray-400">Important notices uploaded by class teacher</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;