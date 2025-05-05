// components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1c1162] text-white pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Report Hub</h2>
          <p className="text-sm text-[#cbd5e0]">
            Trusted vehicle history reports to help you buy with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#e2e8f0]">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Reports</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-[#e2e8f0]">
            Email: support@autoinsight.com<br />
            Phone: +1 (800) 123-4567
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#cbd5e0] hover:text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="text-[#cbd5e0] hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-[#cbd5e0] hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-[#cbd5e0] hover:text-white text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-[#4c4a7d] pt-6 text-center text-sm text-[#a0aec0]">
        © {new Date().getFullYear()} Report Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
