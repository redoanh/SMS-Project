import React, { useState } from 'react';
import axios from 'axios';

const AdmissionPage = () => {
    // ফর্ম ডেটা স্টেট
    const [formData, setFormData] = useState({
        student_name: '',
        gender: '',
        date_of_birth: '',
        class_applied: '',
        group_subject: '',
        admission_type: 'Fresh Admission',
        father_name: '',
        mother_name: '',
        yearly_income: '',
        email: '',
        phone: '',
        address: ''
    });

    const [studentPicture, setStudentPicture] = useState(null);
    const [transferCertificate, setTransferCertificate] = useState(null);
    
    const [submitLoading, setSubmitLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    // সাকসেস পপআপ কন্ট্রোল করার জন্য স্টেট
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const API_URL = 'http://127.0.0.1:8000/api/admissions';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.name === 'student_picture') {
            setStudentPicture(e.target.files[0]);
        } else if (e.target.name === 'transfer_certificate') {
            setTransferCertificate(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        setErrorMessage('');

        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        if (studentPicture) data.append('student_picture', studentPicture);
        if (transferCertificate && formData.admission_type === 'Transfer / From Another School') {
            data.append('transfer_certificate', transferCertificate);
        }

        try {
            const res = await axios.post(API_URL, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (res.data.success) {
                // ফর্ম রিসেট করা
                setFormData({ student_name: '', gender: '', date_of_birth: '', class_applied: '', group_subject: '', admission_type: 'Fresh Admission', father_name: '', mother_name: '', yearly_income: '', email: '', phone: '', address: '' });
                setStudentPicture(null);
                setTransferCertificate(null);
                
                // সাবমিট সফল হলে পপআপ ওপেন করা
                setShowSuccessPopup(true);
            }
        } catch (err) {
            setErrorMessage('Submission failed. Please check all required fields or server connection.');
        } finally {
            setSubmitLoading(false);
        }
    };

    return (
        <div className="bg-[#f3f4f6] min-h-screen py-10 px-4 font-sans flex flex-col items-center justify-center relative">
            <div className="max-w-[800px] w-full space-y-6">
                
                {/* হেডার ব্যানার */}
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">Online Admission Form</h1>
                    <p className="text-gray-500 text-sm mt-1">Fill up the form accurately to submit your admission request</p>
                </div>

                {/* মেইন ফর্ম কার্ড */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-xl space-y-6">
                    
                    {errorMessage && (
                        <div className="p-4 rounded-xl text-xs font-bold text-center border bg-red-50 text-red-700 border-red-200 animate-fadeIn">
                            ❌ {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        
                        {/* ১. স্টুডেন্ট বেসিক ইনফো */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Student Name *</label>
                                <input type="text" name="student_name" value={formData.student_name} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition" placeholder="Enter Full Name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Gender *</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600 cursor-pointer">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Date of Birth *</label>
                                <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Class Applied For *</label>
                                <select name="class_applied" value={formData.class_applied} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-600 cursor-pointer">
                                    <option value="">Select Class</option>
                                    {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* [CONDITION] Class 9 বা 10 হলে গ্রুপ সিলেকশন বক্স ওপেন হবে */}
                        {(formData.class_applied === 'Class 9' || formData.class_applied === 'Class 10') && (
                            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl transition duration-300">
                                <label className="block text-xs font-bold text-blue-700 uppercase mb-1">Academic Group Selection *</label>
                                <select name="group_subject" value={formData.group_subject} onChange={handleChange} required className="w-full bg-white border border-blue-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-700 cursor-pointer">
                                    <option value="">Select Group</option>
                                    <option value="Science">Science</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Arts">Arts</option>
                                </select>
                            </div>
                        )}

                        {/* ২. একাডেমিক ব্যাকগ্রাউন্ড ও ফাইল আপলোড */}
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Academic Background & Documents</h3>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1.5">Admission Type *</label>
                                <div className="flex gap-6 text-sm font-medium text-gray-700">
                                    <label className="flex items-center gap-2 cursor-pointer select-none">
                                        <input type="radio" name="admission_type" value="Fresh Admission" checked={formData.admission_type === 'Fresh Admission'} onChange={handleChange} className="w-4 h-4 text-blue-600" /> Fresh Admission
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer select-none">
                                        <input type="radio" name="admission_type" value="Transfer / From Another School" checked={formData.admission_type === 'Transfer / From Another School'} onChange={handleChange} className="w-4 h-4 text-blue-600" /> Transfer / Another School
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 pt-1">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1">Upload Student Picture * (JPG/PNG)</label>
                                    <input type="file" name="student_picture" accept="image/*" onChange={handleFileChange} required className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer file:transition" />
                                </div>

                                {/* [CONDITION] Transfer স্কুল সিলেক্ট করলে পিডিএফ আপলোড বার ওপেন হবে */}
                                {formData.admission_type === 'Transfer / From Another School' && (
                                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                                        <label className="block text-xs font-bold text-red-700 mb-1">Upload Transfer Certificate * (PDF Only)</label>
                                        <input type="file" name="transfer_certificate" accept="application/pdf" onChange={handleFileChange} required className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-red-100 file:text-red-700 hover:file:bg-red-200 cursor-pointer file:transition" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ৩. ফ্যামিলি ডিটেইলস */}
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Family & Guardian Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1">Father's Name *</label>
                                    <input type="text" name="father_name" value={formData.father_name} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="Father's Full Name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1">Mother's Name *</label>
                                    <input type="text" name="mother_name" value={formData.mother_name} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="Mother's Full Name" />
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <label className="block text-xs font-bold text-gray-500 mb-1">Family Yearly Income (BDT) *</label>
                                    <input type="number" name="yearly_income" value={formData.yearly_income} onChange={handleChange} placeholder="e.g. 350000" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 font-mono" />
                                </div>
                            </div>
                        </div>

                        {/* ৪. কন্টাক্ট ও অ্যাড্রেস */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address *</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="example@mail.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number *</label>
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="017xxxxxxxx" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Present Address</label>
                            <textarea name="address" value={formData.address} onChange={handleChange} rows="2.5" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="House, Road, City, Zip..."></textarea>
                        </div>

                        <button type="submit" disabled={submitLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg text-sm cursor-pointer disabled:bg-blue-400 transition duration-200 mt-2">
                            {submitLoading ? 'Uploading Assets & Submitting...' : 'Submit Admission Request 🚀'}
                        </button>
                    </form>
                </div>
            </div>

            {/* ==========================================
                🔥 সাকসেস পপআপ মডাল (Popup Modal)
               ========================================== */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white max-w-[450px] w-full p-8 rounded-3xl shadow-2xl text-center border border-gray-100 transform scale-100 transition duration-300">
                        
                        {/* সাকসেস অ্যানিমেটেড আইকন বা বক্স */}
                        <div className="w-20 h-20 bg-green-50 text-green-500 border border-green-200 rounded-full flex items-center justify-center text-4xl mx-auto mb-5 shadow-inner">
                            🎉
                        </div>

                        <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight mb-2">Submission Successful!</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Your admission request has been sent to the database node. The academic committee will review the uploaded assets shortly.
                        </p>

                        <button 
                            onClick={() => setShowSuccessPopup(false)} 
                            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md cursor-pointer text-sm"
                        >
                            Got it, Close Window
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdmissionPage;