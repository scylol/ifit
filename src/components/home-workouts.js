import React from "react";
import HomeWorkoutCard from "./home-workout-card";

export default function HomeWorkouts() {
  return (
    <div className="home__workouts">
      <div className="home__workouts__content">
        <HomeWorkoutCard
          src="/images/green-lake-girl.png"
          iconsrc="/images/green-lake-girl-icon.png"
          timeAndDistance={["30.53", "6,248 M"]}
          viewDetails
          text="Lake Inniscarra, Ireland-Pyramid"
          imgAlt="Woman with paddle"
          iconAlt="Woman with paddle"
        />
        <HomeWorkoutCard
          src="/images/girl-sitting.png"
          iconsrc="/images//girl-sitting-icon.png"
          numberOfWorkouts="9"
          text="Performance Series"
          imgAlt="Woman sitting"
          iconAlt="Woman stretching"
        />
        <HomeWorkoutCard
          src="/images/girl-squatting.png"
          iconsrc="/images/girl-squatting-icon.png"
          timeAndDistance={["44.13", "9,948 M"]}
          text="Slow Pulls and Fast Intervals"
          imgAlt="Woman squatting"
          iconAlt="Women"
        />
        <HomeWorkoutCard
          src="/images/yellow-shirt-guy.png"
          iconsrc="/images/yellow-shirt-guy-icon.png"
          numberOfWorkouts="12"
          text="20 Minutes to Toned"
          imgAlt="House on water"
          iconAlt="Man"
        />
        <HomeWorkoutCard
          src="/images/green-lake-girl.png"
          iconsrc="/images/green-lake-girl-icon.png"
          timeAndDistance={["30.53", "6,248 M"]}
          viewDetails
          text="Lake Inniscarra, Ireland-Pyramid"
          imgAlt="Woman with paddle"
          iconAlt="Woman with paddle"
        />
        <HomeWorkoutCard
          src="/images/water-with-boat.png"
          iconsrc="/images/water-with-boat-icon.png"
          timeAndDistance={["36.22", "8,648 M"]}
          text="Charles Race, Boston, Massachusetts"
          imgAlt="Row boat in Boston"
          iconAlt="Woman"
        />
        <HomeWorkoutCard
          src="/images/disco-girl.png"
          iconsrc="/images/disco-girl-icon.png"
          numberOfWorkouts="12"
          text="Full-Body HIIT Series"
          imgAlt="Woman on exercise bike"
          iconAlt="Woman"
        />
        <HomeWorkoutCard
          src="/images/green-boat.png"
          iconsrc="/images/green-boat-icon.png"
          timeAndDistance={["22.22", "4,660 M"]}
          text="Kafue River, Zambia-Power Stroke Pyramid"
          imgAlt="Green Row Boat"
          iconAlt="Man"
        />
        <HomeWorkoutCard
          src="/images/thor.png"
          iconsrc="/images/thor-icon.png"
          numberOfWorkouts="16"
          text="Lake Inniscarra, Ireland-Pyramid"
          imgAlt="Thor"
          iconAlt="Thor"
        />
       <HomeWorkoutCard
          src="/images/green-lake-girl.png"
          iconsrc="/images/green-lake-girl-icon.png"
          timeAndDistance={["30.53", "6,248 M"]}
          viewDetails
          text="Lake Inniscarra, Ireland-Pyramid"
          imgAlt="Woman with paddle"
          iconAlt="Woman with paddle"
        />
      </div>
    </div>
  );
}
