import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // using lucide-react icons (already in your stack)

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition-all z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
