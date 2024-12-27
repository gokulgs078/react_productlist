import React, { useEffect, useRef, useState } from 'react';

const Carousel: React.FC = () => {
  const images = [
    'https://i.postimg.cc/5tWGnmsM/nature1.jpg',
    'https://i.postimg.cc/02qVgNpp/nature2.jpg',
    'https://i.postimg.cc/tCt29H58/car3.jpg',
    'https://i.postimg.cc/ydGyYrFw/30356017-7694497.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalItems = images.length;

  const showImages = (index: number) => {
    setCurrentIndex((index + totalItems) % totalItems);
  };

  const showNextImages = () => {
    showImages(currentIndex + 1);
  };

  const showPrevImages = () => {
    showImages(currentIndex - 1);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(showNextImages, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide; 
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full h-[50vh]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-none w-full h-full">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          stopAutoSlide();
          showPrevImages();
          startAutoSlide();
        }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={() => {
          stopAutoSlide();
          showNextImages();
          startAutoSlide();
        }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
