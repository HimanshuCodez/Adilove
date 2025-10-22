import { useState, useEffect } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Facebook,
  Instagram,
  Music2,
  BellDot,
  HeadphonesIcon,
  Menu,
  X,
} from "lucide-react";

const SwipingMessages = () => {
  const messages = [
    "Free Shipping on Orders Over Rs 499",
    "Register To Get 10% Off: CODE: FNEW10",
    "30 Days Return-Policy",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 overflow-hidden relative w-80 text-center">
      {messages.map((message, index) => (
        <div
          key={index}
          className="absolute w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateY(${(index - currentIndex) * 100}%)` }}
        >
          {message}
        </div>
      ))}
    </div>
  );
};

export default function Header() {
  const XIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const PinterestIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { title: "BABY DOLL", dropdown: ["Satin", "One-Piece"] },
    { title: "LINGERIE", dropdown: ["Teddy Bear", "Bras", "Panties"] },
    { title: "PAJAMAS", dropdown: ["Satin"] },
  ];

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between text-sm">
          <div className="flex-1 flex justify-start">
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/febeul.official">
                <Facebook
                  href="https://www.facebook.com/febeul"
                  className="w-4 h-4 cursor-pointer hover:opacity-80"
                />
              </a>
              <a href="https://www.instagram.com/febeul.official">
                <Instagram className="w-4 h-4 cursor-pointer hover:opacity-80" />
              </a>

              <div className="cursor-pointer hover:opacity-80">
                <a
                  href=" https://www.threads.com/@febeul.official

"
                >
                  {" "}
                  <XIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <SwipingMessages />
          </div>

          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <HeadphonesIcon />
              <span>Help</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#f9aeaf] border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Search className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
          </div>

          <div className="flex-shrink-0">
            <img src="./removebgLogo.png" alt="AdiLove" className=" h-10 w-auto" />
          </div>

          <div className="flex-1 flex items-center justify-end gap-5">
            <Heart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
            <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
            <ShoppingBag className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white   border-b">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center md:justify-between h-16">
            {/* Mobile menu button*/}
            <div className="absolute left-0 inset-y-0 flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            {/* Desktop Menu */}
            <div className="hidden pl-10  gap-80 md:flex md:items-center md:space-x-12">
              {navigation.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href="#"
                    className="py-4 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center transition-colors"
                  >
                    {item.title}
                    {item.dropdown && (
                      <svg
                        className="ml-1 h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </a>
                  {item.dropdown && (
                    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 border">
                      <ul className="py-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <div key={index}>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
