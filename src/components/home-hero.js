import React from "react";

export default function HomeHero() {
  return (
    <div className="home__hero">
      <img className="home__hero__image" src="/images/gmapsinworkout.png" alt="man on treadmill" />
      <h1 className="home__hero__header">
        The best personal training, right in your own home
      </h1>
      <button className="home__hero__join">JOIN IFIT COACH</button>
    </div>
  );
}
