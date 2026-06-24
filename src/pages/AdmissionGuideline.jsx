import React from 'react';
import { Link } from 'react-router-dom';

function AdmissionGuideline() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans">
      <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 text-center">
          <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Admission Guidelines & Information</h1>
          <p className="text-blue-100 font-medium">Academic Session: 2026-2027</p>
        </div>

        <div className="p-8 space-y-8">
          
          {/* Section 1: Admission Process Steps */}
          <div>
            <h3 className="text-xl font-bold text-[#1e3a8a] border-b-2 border-gray-100 pb-2 mb-6 flex items-center gap-2">
              🚀 Application Steps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 relative">
                <span className="absolute top-3 right-4 text-3xl font-black text-blue-200/60">01</span>
                <h4 className="font-bold text-gray-800 mb-2">Fill the Form</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Complete the online admission form with accurate details regarding the student and parent profiles.
                </p>
              </div>

              <div className="bg-amber-50/40 p-5 rounded-xl border border-amber-100 relative">
                <span className="absolute top-3 right-4 text-3xl font-black text-amber-200/60">02</span>
                <h4 className="font-bold text-gray-800 mb-2">Upload Documents</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Upload a student photograph for fresh enrollment, or a valid Transfer Certificate (TC) if transitioning from another institution.
                </p>
              </div>

              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 relative">
                <span className="absolute top-3 right-4 text-3xl font-black text-emerald-200/60">03</span>
                <h4 className="font-bold text-gray-800 mb-2">Submit & Track</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Submit your registration request. Updates regarding the formal assessment and review will be delivered via SMS.
                </p>
              </div>

            </div>
          </div>

          {/* Section 2: Required Documents */}
          <div>
            <h3 className="text-xl font-bold text-[#1e3a8a] border-b-2 border-gray-100 pb-2 mb-4 flex items-center gap-2">
              📄 Required Documents
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              The following hard-copy documents must be produced at the administration desk during final verification:
            </p>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <ul className="space-y-3 text-gray-700 font-medium text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 mt-0.5">✔</span>
                  Photocopy of the student's digital Birth Registration Certificate.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 mt-0.5">✔</span>
                  Photocopies of National Identification Cards (NID) belonging to both parents.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 mt-0.5">✔</span>
                  Three (3) recent passport-sized color photographs of the applicant.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 mt-0.5">✔</span>
                  Original Transfer Certificate (TC) along with the final Academic Report Card from the previous institution (applicable to transfer students).
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Eligibility & Group Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-3 flex items-center gap-2">
                ⚖ Age Eligibility
              </h3>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-sm text-gray-600 leading-relaxed">
                In compliance with educational regulatory policies, a student must be a minimum of <strong>6+ years</strong> old for standard enrollment in Class 1. Age criteria for successive classes scale proportionally.
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-3 flex items-center gap-2">
                🧬 Group Distribution
              </h3>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-sm text-gray-600 leading-relaxed">
                Students entering Class 9 and Class 10 can elect their core academic trajectories between <strong>Science, Commerce,</strong> and <strong>Arts</strong> streams based on performance indexes.
              </div>
            </div>
          </div>

          {/* Section 4: Contact/Helpline */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 text-center">
            <h4 className="font-bold text-[#1e3a8a] mb-2 text-lg">Need Assistance with Enrollment?</h4>
            <p className="text-sm text-gray-600 mb-4">Our dedicated help desk operates from 9:00 AM to 4:00 PM (Sunday through Thursday)</p>
            <div className="flex flex-wrap justify-center gap-6 font-bold text-gray-800 text-sm">
              <div>📞 +880 1700-000000</div>
              <div>✉ admission@school.edu.bd</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 border-t border-gray-100">
            <Link to="/admission" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl shadow-md text-center text-decoration-none transition">
              Go to Admission Form
            </Link>
            <Link to="/" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl shadow-md text-center text-decoration-none transition">
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdmissionGuideline;