// components/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { GoArrowUp } from "react-icons/go";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 p-2 bg-gray-400 rounded-full ${isVisible ? 'block' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <GoArrowUp size={32}/>
    </button>
  );
};

export default ScrollToTopButton;
