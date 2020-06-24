import React from "react";

export default function HomeReviewCard(props) {
  return (
    <div className="home__review__card">
      <img
        className="home__review__card__icon"
        src={props.src}
        alt={props.alt}
      />
      <p className="home__review__card__text">{props.text}</p>
    </div>
  );
}
