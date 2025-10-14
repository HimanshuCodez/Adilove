import { Search, Heart, User, ShoppingBag, Facebook, Instagram, Music2, BellDot, HeadphonesIcon } from 'lucide-react';

export default function Header() {
  const XIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const PinterestIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  );

  const navigation = [
    'HALLOWEEN',
    'NEW IN',
    'PURE SILK',
    'PLUS SIZE',
    'LINGERIE',
    'BRAS & PANTIES',
    'SLEEPWEAR',
    'ACCESSORY',
    'US WH',
    'VIP & POINTS',
    'COLLECTIONS'
  ];

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#f9aeaf] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Instagram className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Music2 className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <div className="cursor-pointer hover:opacity-80">
              <PinterestIcon />
            </div>
            <div className="cursor-pointer hover:opacity-80">
              <XIcon />
            </div>
          </div>
          
          <div className="flex-1 text-sm flex justify-center items-center">
            <div className="flex items-center gap-1">
                <BellDot />
                <span>Notifications</span>
            </div>
          </div>
          
        <div className="flex-1 text-sm flex justify-center items-center">
            <div className="flex items-center gap-1">
                <HeadphonesIcon />
                <span>Help</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <Search className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-gray-800 flex items-center justify-center">
                <span className="text-xs font-bold">F</span>
              </div>
              <span className="text-2xl font-light tracking-wider">FEBEUL</span>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-end gap-5">
            <Heart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
            <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
            <ShoppingBag className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-4 text-sm font-medium text-gray-700">
            {navigation.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}