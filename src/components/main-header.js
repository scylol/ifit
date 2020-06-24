import React, { useState, useEffect } from "react";

export default function MainHeader() {
  const [hideStickyHeader, setHideStickyHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY);
      if (currentScrollY > 883) {
        setHideStickyHeader(true);
      } else if (currentScrollY <= 800) {
        setHideStickyHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideStickyHeader]);
  return (
    <div
      className={`main__header__wrapper ${
        hideStickyHeader ? "main__header__wrapper--hide" : ""
      }`}
    >
      <div className="main__header">
        <div className="main__header__item"> BLOG</div>
        <div className="main__header__item"> NOURISH</div>
        <div className="main__header__item"> SHOP</div>
      </div>
    </div>
  );
}
