// components/Header.tsx

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#fefdff] to-[#d4c3f0] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800 cursor-pointer">
                ReportHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-[#1c1162]">
              About Us
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-[#1c1162]">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#1c1162]">
              Contact
            </Link>
            <Link href="/price" className="text-gray-600 hover:text-[#1c1162]">
              Pricing
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-[#1c1162]">
              Login
            </Link>
            <Link href="/signup">
              <button className="bg-[#1c1162] text-white px-4 py-2 rounded-md hover:bg-violet-900 transition">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/about" className="block text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/privacy" className="block text-gray-700 hover:text-blue-600">
            Privacy Policy
            </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link href="/pricing" className="block text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/login" className="block text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link href="/signup">
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
