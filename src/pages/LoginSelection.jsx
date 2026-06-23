import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginSelection() {
  const navigate = useNavigate();
  const [loginRole, setLoginRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    if (!loginRole) {
      alert('অনুগ্রহ করে Login As থেকে আপনার রোল সিলেক্ট করুন!');
      return;
    }

    // ড্রপডাউনে সিলেক্ট করা রোল অনুযায়ী নির্দিষ্ট লিংকে রিডাইরেক্ট করবে
    if (loginRole === 'student') {
      navigate('/login/student');
    } else if (loginRole === 'teacher') {
      navigate('/login/teacher');
    } else if (loginRole === 'guardian') {
      navigate('/login/guardian');
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-250px)] bg-slate-50 flex flex-col font-sans">
      
      {/* 📋 Welcome টেক্সট (As seen in Screenshot (5).png) */}
      <div className="w-full text-center py-6 px-4">
        <h2 className="text-slate-700 text-sm md:text-[17px] font-normal tracking-wide">
          Welcome to Education Management Information Software (EMIS)
        </h2>
      </div>

      {/* 📦 লগইন বক্স এরিয়া */}
      <div className="flex-grow flex items-start justify-center pt-2 pb-12 px-4">
        <div className="w-full max-w-[360px] bg-white border border-slate-200 rounded-xs shadow-xs p-6 md:p-8">
          
          {/* Sign In হেডিং */}
          <h1 className="text-3xl text-center text-slate-700 font-light mb-6">
            Sign In
          </h1>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            {/* 🔽 ১. রোল সিলেকশন ড্রপডাউন (Student, Teacher, Guardian) */}
            <div>
              <label className="block text-center text-xs font-bold text-slate-800 mb-1">
                Login As
              </label>
              <select
                value={loginRole}
                onChange={(e) => setLoginRole(e.target.value)}
                className="w-full border border-slate-300 rounded-xs px-2 py-1.5 text-xs text-slate-700 bg-white focus:outline-hidden focus:border-blue-400 cursor-pointer"
                required
              >
                <option value="">--Select--</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher / Staff</option>
                <option value="guardian">Guardian</option>
              </select>
            </div>

            {/* 👤 ২. ইউজারনেম ইনপুট ফিল্ড */}
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-slate-300 rounded-xs px-3 py-2 text-xs focus:outline-hidden focus:border-blue-400"
                required
              />
            </div>

            {/* 🔑 ৩. পাসওয়ার্ড ইনপুট ফিল্ড */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-300 rounded-xs px-3 py-2 text-xs focus:outline-hidden focus:border-blue-400"
                required
              />
            </div>

            {/* ⬜ Remember Me চেকবক্স */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <label className="text-xs font-bold text-slate-700 select-none cursor-pointer" htmlFor="remember">
                Remember me
              </label>
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 border-slate-300 rounded-xs accent-blue-500 cursor-pointer"
              />
            </div>

            {/* 🔵 লগইন সাবমিট বাটন */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-[#3ba2d6] hover:bg-sky-600 text-white text-xs font-medium px-5 py-1.5 rounded-xs transition shadow-xs cursor-pointer"
              >
                Login
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSelection;