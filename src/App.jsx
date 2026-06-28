import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginSelection from './pages/LoginSelection';
import StudentLogin from './pages/StudentLogin';
import GuardianLogin from './pages/GuardianLogin';
import TeacherLogin from './pages/TeacherLogin';
import About from './pages/About';
import Admission from './pages/Admission';
import Notice from './pages/Notice';  
import Result from './pages/Result';
import Contact from './pages/Contact';
import Office from './pages/Office';
import AdmissionGuideline from './pages/AdmissionGuideline';
import FacultyDirectory from './pages/FacultyDirectory';
import GoverningBoard from './pages/GoverningBoard';
import PhotoAlbums from './pages/PhotoAlbums';
import VideoChannel from './pages/VideoChannel';
import MissionVision from './pages/MissionVision';
import CareerOpportunities from './pages/CareerOpportunities';

import AdminDashboard from './pages/dashboards/AdminDashboard';
import TeacherDashboard from './pages/dashboards/TeacherDashboard';
import StudentDashboard from './pages/dashboards/StudentDashboard';

function AppContent() {
  const location = useLocation();
  
  // 💡 লগইন পেজ অথবা যেকোনো ড্যাশবোর্ড পেজ হলে মেইন ওয়েবসাইট লেআউট হাইড থাকবে
  const isLoginPage = location.pathname.startsWith('/login');
  const isDashboardPage = location.pathname.startsWith('/dashboard');
  const hideLayout = isLoginPage || isDashboardPage;

  return (
    <div 
      className="min-h-screen bg-repeat-y bg-contain bg-center bg-[#f8fafc]"
      style={{ 
        backgroundImage: `url('https://pub-c5e31b5cdafb419a866161d8d32a0213.r2.dev/category/alpona-bg.png')`,
      }}
    >
      {/* যদি ড্যাশবোর্ড বা লগইন পেজ হয়, তাহলে max-width কন্টেইনার তুলে দিয়ে ফুল স্ক্রিন ভিউ করবে */}
      <div className={hideLayout ? "min-h-screen bg-gray-50 flex flex-col relative" : "max-w-[1140px] mx-auto bg-white shadow-2xl border-x border-slate-200/80 min-h-screen flex flex-col relative"}>
        
        {/* লগইন বা ড্যাশবোর্ড পেজ না হলে Navbar দেখাবে */}
        {!hideLayout && <Navbar />}
        
        <div className="flex-grow">
          <Routes>
            {/* 🌐 পাবলিক ওয়েবসাইট রাউটস */}
            <Route path="/" element={<Home />} />
            <Route path="/login-options" element={<LoginSelection />} />
            <Route path="/login/student" element={<StudentLogin />} />
            <Route path="/login/guardian" element={<GuardianLogin />} />
            <Route path="/login/teacher" element={<TeacherLogin />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/notice" element={<Notice />} />  
            <Route path="/result" element={<Result />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/office" element={<Office />} /> 
            <Route path="/admissionguidline" element={<AdmissionGuideline />} />
            <Route path="/facultydirectory" element={<FacultyDirectory />} /> 
            <Route path="/governingboard" element={<GoverningBoard />} />
            <Route path="/gallery" element={<PhotoAlbums />} />
            <Route path="/video-gallery" element={<VideoChannel />} />
            <Route path="/aims" element={<MissionVision />} />
            <Route path="/careers" element={<CareerOpportunities />} />

            {/* 👑 নতুন ড্যাশবোর্ড রাউটস (কমেন্ট রিমুভ করে ওপেন করা হলো) */}
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            
          </Routes>
        </div>
        
        {/* লগইন বা ড্যাশবোর্ড পেজ না হলে Footer দেখাবে */}
        {!hideLayout && <Footer />}
        
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;