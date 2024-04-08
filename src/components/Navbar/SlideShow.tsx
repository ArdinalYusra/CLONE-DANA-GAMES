"use client";

import { useEffect, useState } from "react";

const slideImages = [
  {
    url: "https://a.m.dana.id/resource/imgs/banner/051023-EIS053-DANA-GAMES-x-DANA-DEALS-Game-Banner.png",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/banner/271223-EIS120-Refresh-KV-game-Banner.png",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/banner/101123-EIS080-DANA-Games-Website-Refresh-KV-Game-Banner-up.png",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/banner/Banner_MLBB-Diamond-Weekly-Pass.png",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/GameBanner-MLBB-11-11-diskon.png",
  },
];

const SlideShow = ({ autoSlides = false, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!autoSlides) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="max-w-[1400px] w-full h-44 lg:h-96 relative">
      <div
        style={{ backgroundImage: `url(${slideImages[currentIndex].url})` }}
        className="h-full bg-center bg-cover duration-500"
      ></div>
    </div>
  );
};

export default SlideShow;
