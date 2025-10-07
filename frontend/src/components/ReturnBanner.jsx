import React from "react";
import { Truck, Tag, RefreshCw } from "lucide-react";

const OfferBar = () => {
  return (
    <div className="w-full bg-pink-500 text-white py-3 px-4 flex flex-col sm:flex-row items-center justify-center text-center gap-4 sm:gap-10 font-medium text-sm sm:text-base">
      {/* Left - Free Returns */}
      <div className="flex items-center gap-2">
        <Truck className="w-5 h-5" />
        <div>
          <p className="uppercase font-semibold">Free Returns</p>
          <p className="text-xs sm:text-sm text-gray-100">
            Free Shipping on orders over $69
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-8 w-px bg-white/50"></div>

      {/* Middle - Offer */}
      <div className="flex items-center gap-2">
        <Tag className="w-5 h-5 text-yellow-300" />
        <div>
          <p className="uppercase font-semibold text-yellow-300">
            Buy 2 Get 3rd 50% Off
          </p>
          <p className="text-xs sm:text-sm text-gray-100">
            Buy 3 Get 4th 100% Off
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-8 w-px bg-white/50"></div>

      {/* Right - Easy Returns */}
      <div className="flex items-center gap-2">
        <RefreshCw className="w-5 h-5" />
        <div>
          <p className="uppercase font-semibold">Easy Returns</p>
          <p className="text-xs sm:text-sm text-gray-100">
            30 days hassle-free returns
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferBar;
