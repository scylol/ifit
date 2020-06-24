import React from "react";

export default function HomeWorkoutCard(props) {
  return (
    <div className="home__workout__card">
      <img className="home__workout__card__image" src={props.src} alt={props.imgAlt} />
      <div className="home__workout__card__main__content">
        <div className="home__workout__card__header">
          <p className="home__workout__card__text">{props.text}</p>
          <img className="home__workout__card__icon" src={props.iconsrc}  alt={props.iconAlt} />
          {props.numberOfWorkouts ? (
            <div className="home__workout__overlay">
              <img
                className="home__workout__overlay__image"
                src="/images/overlay.png"
                alt="overlay"
              />
              <p className="home__workout__overlay__text--number">{props.numberOfWorkouts}</p>
              <p className="home__workout__overlay__text--text">WORKOUTS</p>
              <img
                className="home__workout__overlay__tray"
                src="/images/overlay-lines.png"
                alt="hamburger select"
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {props.timeAndDistance ? (
          <div className="home__workout__info">
            <img
              className="home__workout__info__icon"
              src="/images/clock-icon.png"
              alt="clock"
            />
            <p className="home__workout__info__text">
              {props.timeAndDistance[0]}
            </p>
            <img
              className="home__workout__info__icon"
              src="/images/track-icon.png"
              alt="track"
            />
            <p className="home__workout__info__text">
              {props.timeAndDistance[1]}
            </p>
          </div>
        ) : (
          ""
        )}
        {props.viewDetails ? (
          <div className="home__workout__details">VIEW DETAILS</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
