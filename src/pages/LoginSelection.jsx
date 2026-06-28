import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // 🔥 এক্সিওস ইম্পোর্ট করা হলো
// ড্যাশবোর্ড ফাইলের ভেতরে ইউজারের ডেটা রিড করা:

function LoginSelection() {
  const navigate = useNavigate();
  const [loginRole, setLoginRole] = useState('');
  const [username, setUsername] = useState(''); // লারাভেলে এটা ইমেইল হিসেবে যাবে
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  // 💡 লোডিং এবং এরর স্টেট
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!loginRole) {
      alert('অনুগ্রহ করে Login As থেকে আপনার রোল সিলেক্ট করুন!');
      return;
    }

    setLoading(true);

    try {
      // 🚀 লারাভেল এপিআই-তে লগইন রিকোয়েস্ট পাঠানো হচ্ছে
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: username, // ব্যাকএন্ড যদি ইমেইল আশা করে, তবে ইউজারনেম ফিল্ডের ডেটাই ইমেইল হিসেবে যাবে
        password: password
      });

      if (response.data.success) {
        const user = response.data.user;

        // 🛑 সিকিউরিটি চেক: সিলেক্ট করা রোল আর ডাটাবেজের রোল মিলছে কি না
        if (user.role !== loginRole) {
          setErrorMessage(`আপনি '${loginRole}' হিসেবে লগইন করতে চাচ্ছেন, কিন্তু এই অ্যাকাউন্টটি মূলত একটি '${user.role}' অ্যাকাউন্ট!`);
          setLoading(false);
          return;
        }

        // 💾 লোকাল স্টোরেজে ইউজারের তথ্য সেভ করে রাখা (যাতে ড্যাশবোর্ডে নাম শো করানো যায়)
        localStorage.setItem('user', JSON.stringify(user));

        // 🔀 রোল অনুযায়ী সঠিক ড্যাশবোর্ডে রিডাইরেক্ট
        if (user.role === 'admin') {
          navigate('/dashboard/admin');
        } else if (user.role === 'teacher') {
          navigate('/dashboard/teacher');
        } else if (user.role === 'student') {
          navigate('/dashboard/student');
        }
      }
    } catch (err) {
      // ❌ ভুল পাসওয়ার্ড বা ইমেইল হলে এরর শো করবে
      setErrorMessage(err.response?.data?.message || 'লগইন করতে ব্যর্থ হয়েছে। সার্ভার কানেকশন চেক করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-250px)] bg-slate-50 flex flex-col font-sans">
      
      <div className="w-full text-center py-6 px-4">
        <h2 className="text-slate-700 text-sm md:text-[17px] font-normal tracking-wide">
          Welcome to Education Management Information Software (EMIS)
        </h2>
      </div>

      <div className="flex-grow flex items-start justify-center pt-2 pb-12 px-4">
        <div className="w-full max-w-[360px] bg-white border border-slate-200 rounded-xs shadow-xs p-6 md:p-8">
          
          <h1 className="text-3xl text-center text-slate-700 font-light mb-6">
            Sign In
          </h1>

          {/* 🔥 ভুল ইমেইল/পাসওয়ার্ড বা রোল হলে এই এররটি দেখাবে */}
          {errorMessage && (
            <div className="bg-red-50 text-red-600 text-xs font-semibold p-3 rounded border border-red-100 mb-4 text-center">
              ❌ {errorMessage}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
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
                <option value="admin">Admin</option> {/* 💡 এডমিন অপশন যোগ করা হলো */}
                <option value="guardian">Guardian</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Email Address / Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-slate-300 rounded-xs px-3 py-2 text-xs focus:outline-hidden focus:border-blue-400"
                required
              />
            </div>
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

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#3ba2d6] hover:bg-sky-600 text-white text-xs font-medium px-5 py-1.5 rounded-xs transition shadow-xs cursor-pointer disabled:bg-gray-400"
              >
                {loading ? 'Authenticating...' : 'Login'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSelection;