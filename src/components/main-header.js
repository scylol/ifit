import React, { useState, useEffect, useRef } from "react";

export default function MainHeader() {
  const prevScrollY = useRef(0);
  const [hideStickyHeader, setHideStickyHeader] = useState(false);
  const [goingUp, setGoingUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
        setHideStickyHeader(false);
      }
      prevScrollY.current = currentScrollY;
      if (currentScrollY > 883) {
        setHideStickyHeader(true);
      } else {
        setHideStickyHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
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
