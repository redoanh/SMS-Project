import React, { useState } from 'react';

function Result() {
  const [searchParams, setSearchParams] = useState({
    studentId: '',
    rollNo: '',
    class: '6',
    examType: 'Half-Yearly'
  });

  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);

    /*
    fetch(`http://127.0.0.1:8000/api/get-result?id=${searchParams.studentId}`)
      .then(res => res.json())
      .then(data => { setResultData(data); setLoading(false); });
    */

    setTimeout(() => {
      if(searchParams.studentId === "12345" || searchParams.rollNo === "1") {
        setResultData({
          info: { name: "Redoan Hossain", id: searchParams.studentId || "12345", roll: searchParams.rollNo || "01", class: searchParams.class, gpa: "4.85", status: "Passed" },
          marks: [
            { subject: "Bangla", objective: "25", subjective: "62", total: "87", grade: "A+" },
            { subject: "English", objective: "-", subjective: "82", total: "82", grade: "A+" },
            { subject: "Mathematics", objective: "28", subjective: "55", total: "83", grade: "A+" },
            { subject: "General Science", objective: "22", subjective: "48", total: "70", grade: "A" }
          ]
        });
      } else {
        setResultData(null);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans">
      <div className="max-w-[850px] mx-auto space-y-8">
 
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a]">Online Academic Result</h1>
            <p className="text-gray-500 text-sm mt-1">আপনার পরীক্ষার তথ্য দিয়ে নিচে সার্চ করুন।</p>
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Student ID</label>
              <input type="text" name="studentId" value={searchParams.studentId} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 text-sm" placeholder="e.g. 12345" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Class Roll No *</label>
              <input type="text" name="rollNo" required value={searchParams.rollNo} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 text-sm" placeholder="e.g. 1" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Class *</label>
              <select name="class" value={searchParams.class} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:border-blue-500 text-sm">
                {[...Array(10)].map((_, i) => <option key={i+1} value={i+1}>Class {i+1}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Exam Type *</label>
              <select name="examType" value={searchParams.examType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:border-blue-500 text-sm">
                <option value="Half-Yearly">Half-Yearly Exam</option>
                <option value="Final">Annual Exam</option>
                <option value="Model-Test">Model Test</option>
              </select>
            </div>
            <div className="md:col-span-4 mt-2">
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition cursor-pointer text-sm">
                Search Result
              </button>
            </div>
          </form>
        </div>

        {loading && <div className="text-center text-gray-500 font-bold animate-pulse">Fetching marksheet from server...</div>}

        {!loading && searched && (
          resultData ? (
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 animate-fadeIn space-y-6">

              <div className="border-b-2 border-gray-100 pb-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><span className="text-gray-400 block">Name:</span> <strong className="text-gray-800 text-base">{resultData.info.name}</strong></div>
                <div><span className="text-gray-400 block">ID:</span> <strong className="text-gray-700">{resultData.info.id}</strong></div>
                <div><span className="text-gray-400 block">Roll / Class:</span> <strong className="text-gray-700">{resultData.info.roll} (Class {resultData.info.class})</strong></div>
                <div className="text-right"><span className="text-gray-400 block">GPA / Result:</span> <strong className="text-emerald-600 text-base">{resultData.info.gpa} ({resultData.info.status})</strong></div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                      <th className="p-3">Subject</th>
                      <th className="p-3">Objective</th>
                      <th className="p-3">Subjective</th>
                      <th className="p-3">Total Marks</th>
                      <th className="p-3">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
                    {resultData.marks.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50/50">
                        <td className="p-3 font-semibold text-gray-900">{row.subject}</td>
                        <td className="p-3">{row.objective}</td>
                        <td className="p-3">{row.subjective}</td>
                        <td className="p-3 font-bold text-blue-900">{row.total}</td>
                        <td className="p-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${row.grade === 'A+' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>{row.grade}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 text-red-600 p-5 rounded-xl text-center font-semibold">
              ❌ No Result Found! অনুগ্রহ করে সঠিক স্টুডেন্ট আইডি (যেমন: 12345) অথবা রোল নম্বর ব্যবহার করুন।
            </div>
          )
        )}

      </div>
    </div>
  );
}

export default Result;