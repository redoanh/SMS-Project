import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            if (res.data.success) {
                // সাকসেস হলে ইউজারের ডেটা মেইন অ্যাপে পাঠিয়ে দেওয়া হচ্ছে
                onLoginSuccess(res.data.user);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'লগইন করতে সমস্যা হচ্ছে।');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-[400px] w-full border border-gray-100">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-extrabold text-gray-800">School Portal Login</h1>
                    <p className="text-gray-400 text-xs mt-1">Admin / Teacher / Student Portal</p>
                </div>

                {error && <div className="bg-red-50 text-red-600 text-xs font-bold p-3 rounded-xl border border-red-100 mb-4 text-center">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="user@school.com" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="••••••" />
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl transition shadow-md text-sm cursor-pointer disabled:bg-gray-400">
                        {loading ? 'Authenticating...' : 'Sign In To Dashboard 🔑'}
                    </button>
                </form>

                <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-400 text-center space-y-1">
                    <p>💡 Demo Accounts (Password: 123456)</p>
                    <p>Admin: admin@school.com | Teacher: teacher@school.com</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;