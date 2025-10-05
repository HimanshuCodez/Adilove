import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';

export default function CloviaHeader() {
  const [privateMode, setPrivateMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['BRAS', 'PANTIES', 'NIGHTWEAR', 'ACTIVE', 'SHAPEWEAR', "MEN'S", '4 BRAS @899', '3 BRAS @1099', '4 PANTIES @599', 'EXCLUSIVE', 'MAGAZINE'];

  return (
    <div className="w-full relative">
      {/* Top Bar */}
      <div className="bg-gray-100 px-4 md:px-10 py-2 flex justify-center md:justify-between items-center text-xs text-gray-600 font-medium">
        <div className="hidden md:flex gap-6">
          <span>FREE RETURNS</span>
          <span>100% PRIVACY</span>
          <span>CASH ON DELIVERY</span>
          <span>FREE SHIPPING*</span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="hidden lg:inline">DOWNLOAD THE APP</span>
          <span className="hidden lg:inline">BECOME AN AFFILIATE</span>
          <span className="hidden lg:inline">OUR STORES</span>
          <div className="flex items-center gap-2">
           
            <button
              onClick={() => setPrivateMode(!privateMode)}
              className={`w-10 h-5 rounded-full transition-colors ${
                privateMode ? 'bg-pink-500' : 'bg-gray-300'
              } relative`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                  privateMode ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-4 md:px-10 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="text-3xl md:text-5xl font-bold italic" style={{ fontFamily: 'cursive' }}>
            FEBEUL
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex flex-col gap-1">
              <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-pink-600">50 Lac</span>
              <span className="text-xs font-bold tracking-wider">SERVED</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-10">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-5 py-2.5 pr-12 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-gray-400"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Search className="w-6 h-6 text-gray-700 cursor-pointer md:hidden" />
          <User className="w-6 h-6 text-gray-700 cursor-pointer" />
          <div className="relative cursor-pointer">
            <Heart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="hidden bg-gray-900 px-10 py-3 md:flex gap-8 text-white text-sm font-medium overflow-x-auto">
        {navLinks.map((link, index) => (
          <span key={index} className={`cursor-pointer hover:text-pink-400 whitespace-nowrap ${link.includes('@') || link === "MEN'S" || link === 'EXCLUSIVE' ? 'bg-pink-600 px-4 py-1 -my-1 hover:bg-pink-700' : ''} ${link === 'MAGAZINE' ? 'font-bold tracking-wider' : ''}`}>
            {link}
          </span>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-2xl font-bold italic" style={{ fontFamily: 'cursive' }}>
              FEBEUL
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <div className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <span key={index} className="py-3 border-b cursor-pointer hover:text-pink-600">
                {link}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}