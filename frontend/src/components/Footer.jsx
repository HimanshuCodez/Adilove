import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3 tracking-wider">
              FEBEUL
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Where elegance meets confidence. Discover premium lingerie,
              crafted for comfort and timeless beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/collection" className="hover:text-white">Collection</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">
              Customer Care
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-white">Return Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive offers and new arrivals.
            </p>
            <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 text-sm bg-transparent text-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} FEBEUL. All rights reserved.</p>
          <div className="flex gap-5 text-gray-400">
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
