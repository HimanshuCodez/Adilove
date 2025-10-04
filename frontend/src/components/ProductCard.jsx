import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

// Product Card Component
const ProductCard = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 mb-3">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-[400px] object-cover transition-all duration-300"
        />
        
        {/* Hover Actions */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 opacity-100 md:opacity-0 ${isHovered ? 'md:opacity-100' : ''}`}>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-pink-50">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-pink-50">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>

      {/* Color Variants */}
      <div className="flex gap-2 mb-2">
        {product.variants.map((variant, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded border-2 border-gray-300 overflow-hidden cursor-pointer hover:border-pink-500"
            onMouseEnter={(e) => {
              e.stopPropagation();
              setCurrentImageIndex(index);
            }}
          >
            <img src={variant.thumb} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        {product.moreCount && (
          <div className="w-8 h-8 rounded border-2 border-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">
            +{product.moreCount}
          </div>
        )}
      </div>

      {/* Product Info */}
      <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 hover:text-pink-600">
        {product.name}
      </h3>

      {/* Price */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-gray-900">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
        )}
      </div>
    </div>
  );
};

// Product Detail Page Component
const ProductDetailPage = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-light"
          >
            ×
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Left - Images */}
            <div>
              <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer border-2 rounded overflow-hidden ${
                      selectedImage === index ? 'border-pink-500' : 'border-gray-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-20 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-500 text-white px-3 py-1 text-sm font-bold rounded">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {'★'.repeat(4)}{'☆'}
                </div>
                <span className="text-sm text-gray-600">(128 reviews)</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">Select Size</label>
                  <a href="#" className="text-sm text-pink-600 hover:underline">Size Guide</a>
                </div>
                <div className="flex gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded font-medium ${
                        selectedSize === size
                          ? 'border-pink-600 bg-pink-50 text-pink-600'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 block mb-3">Select Color</label>
                <div className="flex gap-2">
                  {product.variants.map((variant, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded border-2 border-gray-300 overflow-hidden cursor-pointer hover:border-pink-500"
                    >
                      <img src={variant.thumb} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition">
                  ADD TO CART
                </button>
                <button className="px-6 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              {/* Product Details */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-3">Product Details</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Material: Premium lace and mesh</li>
                  <li>• Care: Hand wash cold, lay flat to dry</li>
                  <li>• Features: Adjustable straps, removable padding</li>
                  <li>• Style: Sexy, comfortable, breathable</li>
                  <li>• Occasion: Intimate wear, special occasions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function ProductCardsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Garter Lingerie Set 2 Piece Teddy",
      price: 29.58,
      originalPrice: 36.18,
      discount: 18,
      images: [
        "https://avidlove.com/cdn/shop/files/SYV008349_B-1.jpg?v=1757498904&width=5000",
        "https://avidlove.com/cdn/shop/files/SYV008349_B-2.jpg?v=1757498904&width=5000",
        "https://avidlove.com/cdn/shop/files/SYV008349_B-3.jpg?v=1757498904&width=5000"
      ],
      variants: [
        { thumb: "https://avidlove.com/cdn/shop/files/SYV008349_B-3.jpg?v=1757498904&width=5000" }
      ],
      moreCount: null
    },
    {
      id: 2,
      name: "Flash Sale-Sheer Fishnet Bodysuit+Crop Top",
      price: 30.68,
      originalPrice: null,
      discount: null,
      images: [
        "https://avidlove.com/cdn/shop/files/SYV008190_PU-1.jpg?v=1752824725&width=5000",
        "https://avidlove.com/cdn/shop/files/SYV008190_PU-2.jpg?v=1752824725&width=5000"
      ],
      variants: [
        { thumb: "https://avidlove.com/cdn/shop/files/SYV008190_B-1.jpg?v=1752824725&width=66" },
        { thumb: "https://avidlove.com/cdn/shop/files/SYV008190_R-1.jpg?v=1752824610&width=66" },
        { thumb: "https://avidlove.com/cdn/shop/files/SYV008190_R-1.jpg?v=1752824610&width=5000" }
      ],
      moreCount: 2
    },
    {
      id: 3,
      name: "Deep V Teddy Racerback Backless Bodysuits",
      price: 29.58,
      originalPrice: null,
      discount: null,
      images: [
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-mid-waist-hipster-panty-in-light-pink-with-inner-elastic-100-cotton-419266.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-mid-waist-hipster-panty-in-light-pink-with-inner-elastic-100-cotton-262042.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-mid-waist-hipster-panty-in-light-pink-with-inner-elastic-100-cotton-730369.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-mid-waist-hipster-panty-in-light-pink-with-inner-elastic-100-cotton-612745.jpg",
      ],
      variants: [
        { thumb: "https://images.unsplash.com/photo-1583429897218-1da5e66ce25c?w=50&h=50&fit=crop" },
        { thumb: "https://images.unsplash.com/photo-1590739225053-c6eb63d14e8c?w=50&h=50&fit=crop" },
        { thumb: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=50&h=50&fit=crop" }
      ],
      moreCount: 5
    },
    {
      id: 4,
      name: "Costume Hollow Crop Top Pleated Skirts Set",
      price: 29.58,
      originalPrice: null,
      discount: null,
      images: [
        "https://avidlove.com/cdn/shop/files/AML009330_B-5_346c7c92-8a68-4024-ae2d-64429de4aa8e.jpg?v=1750389624&width=5000",
        "https://avidlove.com/cdn/shop/files/AML009330_B-1.jpg?v=1750389624&width=5000",
        "https://avidlove.com/cdn/shop/files/AML009330_B-2.jpg?v=1750389625&width=5000"
      ],
      variants: [
        { thumb: "https://avidlove.com/cdn/shop/files/AML009330_CLB-2.jpg?v=1750389625&width=65" },
        { thumb: "https://avidlove.com/cdn/shop/files/AML009330_CLB-5.jpg?v=1750389625&width=65" },
        { thumb: "https://avidlove.com/cdn/shop/files/AML009330_CLB-6.jpg?v=1750389625&width=65" }
      ],
      moreCount: 1
    },
     {
      id: 5,
      name: "Garter Lingerie Set 2 Piece Teddy",
      price: 29.58,
      originalPrice: 36.18,
      discount: 18,
      images: [
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-padded-non-wired-t-shirt-bra-22-595748.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-padded-non-wired-t-shirt-bra-22-813020.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-padded-non-wired-t-shirt-bra-22-700970.jpg"
      ],
      variants: [
        { thumb: "https://avidlove.com/cdn/shop/files/SYV008349_B-3.jpg?v=1757498904&width=5000" }
      ],
      moreCount: 6
    },
     {
      id: 6,
      name: "Padded Non-Wired Full Coverage Bra in Red - Lace",
      price: 19.58,
      originalPrice: 36.18,
      discount: 18,
      images: [
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-br1000y04-229432.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-br1000y04-694856.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-br1000y04-529211.jpg"
      ],
      variants: [
        { thumb: "https://avidlove.com/cdn/shop/files/SYV008349_B-3.jpg?v=1757498904&width=5000" }
      ],
      moreCount: 6
    },
     {
      id: 7,
      name: "Garter Lingerie Set 2 Piece Teddy",
      price: 9.58,
      originalPrice: 36.18,
      discount: 18,
      images: [
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-high-waist-floral-print-hipster-panty-in-white-cotton-30-879068.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-high-waist-floral-print-hipster-panty-in-white-cotton-30-864514.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-high-waist-floral-print-hipster-panty-in-white-cotton-30-681152.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-high-waist-floral-print-hipster-panty-in-white-cotton-30-159525.jpg"
      ],
      variants: [
        { thumb: "https://image.clovia.com/media/clovia-images/images/67x100/clovia-picture-padded-non-wired-full-cup-multiway-bra-in-navy-lace-645439.jpg" }
      ],
      moreCount: 6
    },
     {
      id: 8,
      name: "Garter Lingerie Set 2 Piece Teddy",
      price: 9.58,
      originalPrice: 36.18,
      discount: 18,
      images: [
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-non-padded-non-wired-full-cup-bra-1-674453.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-non-padded-non-wired-full-cup-bra-1-924631.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-non-padded-non-wired-full-cup-bra-1-586657.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-non-padded-non-wired-full-cup-bra-1-652537.jpg"
      ],
      variants: [
        { thumb: "https://image.clovia.com/media/clovia-images/images/67x100/clovia-picture-padded-non-wired-full-cup-multiway-bra-in-navy-lace-645439.jpg" }
      ],
      moreCount: 7
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-8 text-sm text-gray-700 overflow-x-auto">
            {['HALLOWEEN', 'NEW IN', 'PURE SILK', 'PLUS SIZE', 'LINGERIE', 'BRAS & PANTIES', 'SLEEPWEAR', 'ACCESSORY', 'US WH', 'VIP & POINTS', 'COLLECTIONS'].map((item) => (
              <span key={item} className="whitespace-nowrap cursor-pointer hover:text-pink-600 font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailPage
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}