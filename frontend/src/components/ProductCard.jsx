import React, { useState } from 'react';
import { Heart, ShoppingCart, X } from 'lucide-react';

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
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[95vh] flex flex-col transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-700">
                <X className="w-6 h-6" />
            </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left - Images */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto object-cover aspect-[3/4]" // Maintain aspect ratio
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? 'border-pink-500' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover aspect-square" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(4)}{'☆'}
                  </div>
                  <span>(128 reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-pink-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                    <span className="bg-red-100 text-red-600 px-2 py-0.5 text-sm font-semibold rounded-full">
                      {product.discount}% OFF
                    </span>
                )}
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">Select Size</label>
                  <a href="#" className="text-sm text-pink-600 hover:underline font-medium">Size Guide</a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium text-sm transition-colors ${
                        selectedSize === size
                          ? 'border-pink-600 bg-pink-50 text-pink-700'
                          : 'border-gray-300 text-gray-800 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Select Color</label>
                <div className="flex gap-3">
                  {product.variants.map((variant, index) => (
                    <div
                      key={index}
                      className={`w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 hover:border-pink-500 ${index === 0 ? 'border-pink-500' : 'border-transparent'}`}
                    >
                      <img src={variant.thumb} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-3 pt-4">
                <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold text-base hover:bg-pink-700 transition flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  ADD TO CART
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-800 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  ADD TO WISHLIST
                </button>
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
