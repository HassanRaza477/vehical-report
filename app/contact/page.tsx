'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaRegEnvelope, FaUser, FaPhoneAlt, FaRegComment } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!form.current) return false;
    const formData = new FormData(form.current);
    
    // Required fields validation
    if (!formData.get('name')) {
      toast.error('❌ Please enter your name');
      return false;
    }
    
    if (!formData.get('email')) {
      toast.error('❌ Please enter your email');
      return false;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.get('email') as string)) {
      toast.error('❌ Please enter a valid email address');
      return false;
    }

    if (!formData.get('message')) {
      toast.error('❌ Please enter your message');
      return false;
    }

    return true;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || !validateForm()) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        'service_ujsu1gp', // Replace with your Service ID
        'template_rikweo8', // Replace with your Template ID
        form.current,
        'zpxH0WnbGNz0Js06L' // Replace with your Public Key
      )
      .then(() => {
        toast.success('✅ Message sent successfully!');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('❌ Failed to send message. Please try again.');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen">
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1c1162] to-[#2a1a8c] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Connect With Us
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Have questions or need support? Our team is ready to help you. 
            Send us a message and we will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 transform hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1c1162]">
            Send Us a Message
          </h2>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-gray-400 text-lg" />
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c1162] focus:border-transparent"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <FaRegEnvelope className="absolute top-4 left-4 text-gray-400 text-lg" />
              <input
                type="email"
                name="email"
                placeholder="email @example.com"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c1162] focus:border-transparent"
              />
            </div>

            {/* Phone Field */}
          

            {/* Message Field */}
            <div className="relative">
              <FaRegComment className="absolute top-4 left-4 text-gray-400 text-lg" />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c1162] focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 text-white font-semibold rounded-lg transition-all ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#1c1162] hover:bg-[#100a40] transform hover:scale-105'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}