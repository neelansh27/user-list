// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../css/ScrollTop.css";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="absolute right-14 top-20">
    <span>
      {isVisible && (
        <div className="scroll-top">
          <button onClick={scrollToTop} className="scroll-button">
  <IoIosArrowUp/>
          </button>
        </div>
      )}
    </span>
</div>
  );
};

export default ScrollToTopButton;

