import { ImagesEvent } from "@/constants";
import React, { useState, useEffect } from "react";

const NewsDanevents = ({ autoSlides = false, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? ImagesEvent.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === ImagesEvent.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!autoSlides) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="pb-10 lg:py-10">
      <div className="max-w-[1400px] w-full h-44 lg:h-96 relative rounded-md">
        <div
          style={{
            backgroundImage: `url(${ImagesEvent[currentIndex].url})`,
          }}
          className="h-full bg-center bg-cover duration-500"
        ></div>
      </div>
    </div>
  );
};
export default NewsDanevents;
