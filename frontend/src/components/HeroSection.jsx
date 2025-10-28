import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
      "./purple.jpg",
    "./red.jpg",
    "black.jpg",
  
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
                className="w-full h-full object-cover object-top"
              />
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
