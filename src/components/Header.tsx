import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [location, setLocation] = useState('Delhi');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handlePricingClick = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('services-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !address || !email) {
      alert("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    const templateParams = {
      name,
      email,
      phone,
      address,
      location
    };

    // 1️⃣ Send Email via EmailJS
    emailjs.send('service_0fz254l', 'template_8tjm8ap', templateParams, 'yKzPEtzad9qgCuM2M')
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Something went wrong while sending email');
      });

    // 2️⃣ Send data to Google Spreadsheet
    try {
      const response = await fetch('https://api.sheetbest.com/sheets/e2b62836-bbcf-4ce9-b599-0326401afdf0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Name: name,
          Phone: phone,
          Location: location,
          Address: address,
          Email: email
        })
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setPhone('');
        setAddress('');
        setEmail('');
        setTimeout(() => {
          setShowPopup(false);
          setSuccess(false);
        }, 2000);
      } else {
        alert('Something went wrong while saving to spreadsheet');
      }
    } catch (error) {
      console.error('Spreadsheet error:', error);
      alert('Something went wrong while saving to spreadsheet');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">WearWisely</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Our Services</a>
            <button onClick={handlePricingClick} className="text-gray-700 hover:text-orange-500 font-medium">Pricing</button>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Community</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Our Blog</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:9716877810" className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
              9716877810
            </a>
            <button 
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setShowPopup(true)}
            >
              Request Call Back
            </button>
          </div>

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-xl w-80 shadow-xl relative animate-slide-up">
            <h2 className="text-lg font-semibold mb-4 text-center">We're a click away!</h2>

            <form onSubmit={handleSubmit}>
              <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border px-3 py-2 rounded mb-3">
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Other">Other</option>
              </select>

              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-3 py-2 rounded mb-3" />
              <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border px-3 py-2 rounded mb-3" />
              <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border px-3 py-2 rounded mb-3" />
              <input type="email" placeholder="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded mb-3" />

              <p className="text-xs text-gray-500 mb-4">We will contact you via Call, SMS, WhatsApp or Email.</p>

              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
                Request Call Back
              </button>
            </form>

            {success && <p className="text-green-600 text-center mt-4">Request Submitted Successfully!</p>}

            <button className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl" onClick={() => setShowPopup(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
