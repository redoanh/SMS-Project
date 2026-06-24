import React, { useState } from 'react';

function Contact() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Message Data:", contactData);
    
    
    
    /*
    fetch('http://127.0.0.1:8000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    }).then(res => res.json());
    */

    setSubmitted(true);
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans">
      <div className="max-w-[1100px] mx-auto space-y-10">
        
        <div className="text-center max-w-[600px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-2">Contact Us</h1>
          <p className="text-gray-500 text-sm md:text-base">
            আমাদের শিক্ষাপ্রতিষ্ঠান সংক্রান্ত যেকোনো জিজ্ঞাসা, পরামর্শ বা অভিযোগের জন্য নিচে দেওয়া তথ্য অথবা ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-4">
           
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 flex items-start gap-4">
              <div className="bg-blue-50 text-blue-600 p-3 rounded-xl font-bold text-xl">📍</div>
              <div>
                <h3 className="font-bold text-gray-800 text-base mb-1">Our Campus Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Redoan School <br />
                  Mugda, Dhgaka-1214, Bangladesh
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 flex items-start gap-4">
              <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl font-bold text-xl">📞</div>
              <div>
                <h3 className="font-bold text-gray-800 text-base mb-1">Phone & Mobile</h3>
                <p className="text-gray-600 text-sm font-medium">+880 1627312846</p>
                <p className="text-gray-400 text-xs mt-0.5">শনিবার থেকে বৃহস্পতিবার (সকাল ৯টা - বিকাল ৪টা)</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 flex items-start gap-4">
              <div className="bg-amber-50 text-amber-600 p-3 rounded-xl font-bold text-xl">✉️</div>
              <div>
                <h3 className="font-bold text-gray-800 text-base mb-1">Email Support</h3>
                <p className="text-gray-600 text-sm font-medium">info@schoolportal.edu.bd</p>
                <p className="text-gray-400 text-xs mt-0.5">যেকোনো প্রাতিষ্ঠানিক মেইল করুন</p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
              ✉️ Send Us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-10 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-sm px-4 max-w-[400px] mx-auto">আপনার বার্তাটি আমাদের কাছে পৌঁছেছে। খুব শীঘ্রই মেইল বা ফোনের মাধ্যমে উত্তর দেওয়া হবে।</p>
                <button onClick={() => setSubmitted(false)} className="mt-5 bg-[#1e3a8a] text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-blue-800 transition">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                    <input type="text" name="name" required value={contactData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 text-sm" placeholder="e.g. Al-Amin" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" name="phone" required value={contactData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 text-sm" placeholder="01XXXXXXXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" value={contactData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 text-sm" placeholder="name@example.com" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Subject / Topic *</label>
                  <input type="text" name="subject" required value={contactData.subject} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 text-sm" placeholder="কি বিষয়ে জানতে চান?" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Detailed Message *</label>
                  <textarea name="message" rows="4" required value={contactData.message} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 text-sm" placeholder="আপনার বার্তাটি এখানে বিস্তারিত লিখুন..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition cursor-pointer text-sm">
                  Send Message
                </button>
              </form>
            )}

          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">🌐 Campus Location Map</h3>
          <div className="w-full h-[300px] rounded-xl overflow-hidden bg-gray-200 relative">
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610.1654316315!2d90.42436445!3d23.72807355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85006b52755%3A0xc66579930bf435f3!2sMugda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1719000000000!5m2!1sen!2sbd"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="School Location Map"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;