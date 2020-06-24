import React from "react";

export default function HomeEquipmentCard(props) {
  return (
    <div className="home__equipment__card">
      <img
        className="home__equipment__card__icon"
        src={props.src}
        alt={props.src}
      />
      <p className="home__equipment__card__text">{props.text}</p>
    </div>
  );
}
