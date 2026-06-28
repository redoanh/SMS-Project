import React, { useState, useEffect } from 'react';
import axios from 'react-class';

const Dashboard = ({ user, onLogout }) => {
    const [admissions, setAdmissions] = useState([]);
    const [loadingAdmissions, setLoadingAdmissions] = useState(true);

    // শুধু এডমিন লগইন করলে অ্যাডমিশন ডাটা লোড হবে
    useEffect(() => {
        if (user.role === 'admin') {
            axios.get('http://127.0.0.1:8000/api/admissions')
                .then(res => { if (res.data.success) setAdmissions(res.data.data); })
                .catch(err => console.error(err))
                .finally(() => setLoadingAdmissions(false));
        }
    }, [user]);

    const handleAdmissionDelete = async (id) => {
        if (window.confirm("আপনি কি নিশ্চিতভাবে এই অ্যাডমিশন ফর্মটি ডিলিট করতে চান?")) {
            try {
                const res = await axios.delete(`http://127.0.0.1:8000/api/admissions/${id}`);
                if (res.data.success) {
                    setAdmissions(admissions.filter(app => app.id !== id));
                }
            } catch (err) {
                alert("ডিলিট করতে সমস্যা হয়েছে।");
            }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* ড্যাশবোর্ড টপ বার */}
            <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
                <div>
                    <h2 className="text-xl font-black text-gray-800">School Management System</h2>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Role: <span className="text-blue-600">{user.role} Portal</span></p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-700">👋 {user.name}</span>
                    <button onClick={onLogout} className="bg-red-50 hover:bg-red-100 border border-red-100 text-red-600 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer">
                        Logout 🚪
                    </button>
                </div>
            </div>

            {/* মেইন কন্টেন্ট এরিয়া (ইউজার রোল ভিত্তিক কন্ডিশনাল ড্যাশবোর্ড) */}
            <div className="max-w-[1200px] mx-auto p-6">
                
                {/* 👑 ১. এডমিন ড্যাশবোর্ড ভিউ */}
                {user.role === 'admin' && (
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-2xl shadow-md">
                            <h2 className="text-xl font-bold">Welcome Back, Registrar Admin</h2>
                            <p className="text-xs text-blue-100 mt-1">এখানে আপনি নতুন স্টুডেন্টদের সাবমিট করা সব অ্যাডমিশন ফর্ম লাইভ দেখতে ও ডিলিট করতে পারবেন।</p>
                        </div>

                        {/* অ্যাডমিশন মনিটর টেবিল */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-800 mb-4 flex justify-between items-center">
                                <span>📥 Pending Admission Requests</span>
                                <span className="text-xs bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full font-bold">{admissions.length} Applications</span>
                            </h3>

                            {loadingAdmissions ? (
                                <p className="text-sm text-gray-400 text-center py-6 animate-pulse">Loading Admission Applications...</p>
                            ) : admissions.length === 0 ? (
                                <p className="text-sm text-gray-400 text-center py-6">কোনো নতুন অ্যাডমিশন রিকোয়েস্ট নেই।</p>
                            ) : (
                                <div className="space-y-3">
                                    {admissions.map(app => (
                                        <div key={app.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between gap-4">
                                            <div className="flex items-start gap-3">
                                                <img src={app.student_picture} alt="" className="w-12 h-12 rounded-lg object-cover bg-gray-200 border" />
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-bold text-sm text-gray-800">{app.student_name}</h4>
                                                        <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-700 px-2 rounded">{app.class_applied}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500">Father: {app.father_name} | Income: ৳{app.yearly_income}</p>
                                                    <p className="text-[10px] text-gray-400 font-semibold">📞 {app.phone} | Type: {app.admission_type}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => handleAdmissionDelete(app.id)} className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 px-3 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer">
                                                Delete 🗑
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* 👨‍🏫 ২. টিচার ড্যাশবোর্ড ভিউ */}
                {user.role === 'teacher' && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-gray-800">Teacher's Console Panel 📚</h2>
                        <p className="text-sm text-gray-500">স্বাগতম শিক্ষক প্যানেলে। এখানে খুব শীঘ্রই আপনি ক্লাসরুমের এটেনডেন্স, পরীক্ষার মার্কস ইনপুট এবং ক্লাস রুটিন মডিউলগুলো অ্যাক্সেস করতে পারবেন।</p>
                        <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-purple-700 font-bold text-xs">📝 Mark Entry</div>
                            <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-green-700 font-bold text-xs">📅 Class Routine</div>
                            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 text-orange-700 font-bold text-xs">👥 Attendance</div>
                        </div>
                    </div>
                )}

                {/* 🎓 ৩. স্টুডেন্ট ড্যাশবোর্ড ভিউ */}
                {user.role === 'student' && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-gray-800">Student Portal Dashboard 🎒</h2>
                        <p className="text-sm text-gray-500">স্বাগতম স্টুডেন্ট পোর্টালে। এখান থেকে খুব শীঘ্রই তুমি তোমার পেমেন্ট হিস্ট্রি, পরীক্ষার রেজাল্ট এবং শিক্ষকদের দেওয়া অ্যাসাইনমেন্টের নোটিশ দেখতে পাবে।</p>
                        <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-700 font-bold text-xs">📊 Exam Results</div>
                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-blue-700 font-bold text-xs">💳 Payment Ledger</div>
                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-700 font-bold text-xs">📢 Notice Board</div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dashboard;