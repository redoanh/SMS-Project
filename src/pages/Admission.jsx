import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Admission() {
  const [formData, setFormData] = useState({
    studentName: '',
    birthDate: '',
    gender: 'Male',
    desiredClass: '1',
    group: '', 
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    familyIncome: '',
    phone: '',
    email: '',
    address: '',
    isNewStudent: 'Yes',
    prevSchoolName: '',
    prevClass: ''
  });

  const [studentPicture, setStudentPicture] = useState(null);
  const [transferCertificate, setTransferCertificate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
 
    if (name === 'desiredClass' && value !== '9' && value !== '10') {
      setFormData({ ...formData, [name]: value, group: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'studentPicture') {
      setStudentPicture(files[0]);
    } else if (name === 'transferCertificate') {
      setTransferCertificate(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    const finalData = new FormData();
    Object.keys(formData).forEach(key => {
      finalData.append(key, formData[key]);
    });
    
    if (studentPicture) finalData.append('studentPicture', studentPicture);
    if (formData.isNewStudent === 'No' && transferCertificate) {
      finalData.append('transferCertificate', transferCertificate);
    }

    console.log("Detailed Admission Form Text Data:", formData);
    console.log("Uploaded Student Picture:", studentPicture);
    console.log("Uploaded TC File:", transferCertificate);
    
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans">
      <div className="max-w-[850px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
 
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 text-center">
          <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Online Admission Form</h1>
          <p className="text-blue-100 font-medium">Academic Session: 2026-2027</p>
        </div>

        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl font-bold animate-bounce">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Application Submitted Successfully!</h2>
            <p className="text-gray-600 max-w-[500px] mx-auto mb-8 leading-relaxed">
              আপনার বিস্তারিত আবেদনটি ফ্রন্টএন্ড স্টেটে ফাইলসহ সফলভাবে সংরক্ষিত হয়েছে। ব্যাকএন্ড এপিআই যুক্ত করার পর এটি সরাসরি ডাটাবেসে চলে যাবে।
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => { setSubmitted(false); setStudentPicture(null); setTransferCertificate(null); }} className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-md cursor-pointer transition">
                Apply Another
              </button>
              <Link to="/" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2.5 rounded-lg font-bold shadow-md text-decoration-none transition">
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
      
            <div>
              <h3 className="text-lg font-bold text-[#1e3a8a] border-b-2 border-gray-100 pb-2 mb-5 flex items-center gap-2">
                👤 Student Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Student Full Name *</label>
                  <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" placeholder="e.g. Redoan Ahmed" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Date of Birth *</label>
                  <input type="date" name="birthDate" required value={formData.birthDate} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Gender *</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Desired Class *</label>
                  <select name="desiredClass" value={formData.desiredClass} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition">
                    {[...Array(10)].map((_, i) => (
                      <option key={i+1} value={i+1}>Class {i+1}</option>
                    ))}
                  </select>
                </div>
              </div>

              {(formData.desiredClass === '9' || formData.desiredClass === '10') && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 animate-fadeIn">
                  <label className="block text-sm font-bold text-[#1e3a8a] mb-2">Select Academic Group *</label>
                  <div className="flex gap-6">
                    {['Science', 'Commerce', 'Arts'].map((grp) => (
                      <label key={grp} className="flex items-center gap-2 cursor-pointer font-medium text-gray-700">
                        <input type="radio" name="group" value={grp} required checked={formData.group === grp} onChange={handleChange} className="w-4 h-4 text-blue-600 focus:ring-blue-400" />
                        {grp}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1e3a8a] border-b-2 border-gray-100 pb-2 mb-5 flex items-center gap-2">
                🏫 Academic Background & Documents
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">Admission Type *</label>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-gray-700">
                    <input type="radio" name="isNewStudent" value="Yes" checked={formData.isNewStudent === 'Yes'} onChange={handleChange} className="w-4 h-4 text-blue-600" />
                    Fresh Admission (No Previous School)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-gray-700">
                    <input type="radio" name="isNewStudent" value="No" checked={formData.isNewStudent === 'No'} onChange={handleChange} className="w-4 h-4 text-blue-600" />
                    Transfer / From Another School
                  </label>
                </div>
              </div>

           
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
         
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Upload Student Picture *</label>
                  <input 
                    type="file" 
                    name="studentPicture" 
                    required={!studentPicture} 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                  />
                  <p className="text-[11px] text-gray-400 mt-1">Accepts images only (JPG, JPEG, PNG)</p>
                  {studentPicture && <p className="text-xs text-emerald-600 mt-1 font-medium">Selected: {studentPicture.name}</p>}
                </div>
                {formData.isNewStudent === 'No' && (
                  <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 animate-fadeIn">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Upload Transfer Certificate (TC) *</label>
                    <input 
                      type="file" 
                      name="transferCertificate" 
                      required 
                      accept=".pdf, image/png, image/jpeg, image/jpg" 
                      onChange={handleFileChange}
                      className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-bold file:bg-amber-100 file:text-amber-800 hover:file:bg-amber-200 cursor-pointer"
                    />
                    <p className="text-[11px] text-gray-400 mt-1">Supports PDF, PNG, JPG, JPEG formats</p>
                    {transferCertificate && <p className="text-xs text-emerald-600 mt-1 font-medium">Selected: {transferCertificate.name}</p>}
                  </div>
                )}
              </div>
              {formData.isNewStudent === 'No' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200 animate-fadeIn">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Previous School Name *</label>
                    <input type="text" name="prevSchoolName" required value={formData.prevSchoolName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:outline-none" placeholder="e.g. Model High School" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Last Successfully Passed Class *</label>
                    <input type="text" name="prevClass" required value={formData.prevClass} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:outline-none" placeholder="e.g. Class 5" />
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1e3a8a] border-b-2 border-gray-100 pb-2 mb-5 flex items-center gap-2">
                👪 Family Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Father's Name *</label>
                  <input type="text" name="fatherName" required value={formData.fatherName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Father's Occupation *</label>
                  <input type="text" name="fatherOccupation" required value={formData.fatherOccupation} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" placeholder="e.g. Govt. Service, Business" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Mother's Name *</label>
                  <input type="text" name="motherName" required value={formData.motherName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Mother's Occupation *</label>
                  <input type="text" name="motherOccupation" required value={formData.motherOccupation} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" placeholder="e.g. Housewife, Teacher" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Annual Family Income (BDT) *</label>
                  <input type="number" name="familyIncome" required value={formData.familyIncome} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" placeholder="e.g. 350000" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1e3a8a] border-b-2 border-gray-100 pb-2 mb-5 flex items-center gap-2">
                📞 Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Active Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" placeholder="017XXXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" placeholder="guardian@mail.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Present & Permanent Address *</label>
                  <textarea name="address" rows="3" required value={formData.address} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition" placeholder="গ্রাম/রোড, পোস্ট অফিস, থানা, জেলা..."></textarea>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] text-white font-bold py-4 px-4 rounded-xl shadow-lg transition duration-150 cursor-pointer text-lg tracking-wide">
                Submit Admission Application
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}

export default Admission;