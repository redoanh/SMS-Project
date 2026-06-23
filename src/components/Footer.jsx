import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
 
        <div className="footer-column">
          <h3 className="footer-heading footer-logo">SchoolPortal</h3>
          <p className="footer-text">
            আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীর মেধা বিকাশ এবং একটি আধুনিক ও ডিজিটাল শিক্ষা পরিবেশ নিশ্চিত করা।
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/login-options" className="footer-link">Login Portal</Link>
          <a href="#about" className="footer-link">About Us</a>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Portals</h3>
          <Link to="/login/student" className="footer-link">Student Login</Link>
          <Link to="/login/guardian" className="footer-link">Guardian Login</Link>
          <Link to="/login/teacher" className="footer-link">Teacher Login</Link>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-contact-info">📍 ১/এ, ধানমন্ডি, ঢাকা, বাংলাদেশ</p>
          <p className="footer-contact-info">📞 +৮৮০ ১৩২৪-৫৬৭৮৯০</p>
          <p className="footer-contact-info">✉️ info@schoolportal.com</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SchoolPortal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;