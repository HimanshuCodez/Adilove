import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
      "https://cdn.zivame.com/media/v3/panties_main_021025.gif",
    "https://image.clovia.com/media/images/dtbanner/4-panties-DT-Slider_32455765.jpg",
    "https://avidlove.com/cdn/shop/files/1980_500.jpg?v=1759242025&width=1400",
    "https://image.clovia.com/media/images/dtbanner/4-bras-DT-Slider_765213254.jpg",
    "https://image.clovia.com/media/images/dtbanner/Pay-day-sale-DT-HP-Slider-654273.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (sliderRef.current && sliderRef.current.parentElement) {
      const slideWidth = sliderRef.current.parentElement.clientWidth;
      sliderRef.current.style.transform = `translateX(-${
        index * slideWidth
      }px)`;
    }
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <div className="w-full">
      <div className="w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          ref={sliderRef}
        >
          {slides.map((src, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 relative">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-30">
               <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "sans-serif" }}>
  FEBEUL
</h1>

                <Link to="/collection">
                  <button className="mt-4 px-6 py-2 md:px-8 md:py-3 text-lg border-2 border-white text-white bg-transparent font-semibold hover:bg-white hover:text-black transition-all duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
