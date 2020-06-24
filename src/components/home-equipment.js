import React from "react";
import HomeEquipmentCard from "../components/home-equipment-card";

export default function HomeEquipment() {
  return (
    <div className="home__equipment">
      <h2 className="home__equipment__header">
        Interested in our exciting iFit-enabled equipment?
      </h2>
      <div className="home__equipment__content">
        <HomeEquipmentCard
          src="/images/woman-treadmill.png"
          text="Treadmills"
          alt="woman on treadmill"
        />
        <HomeEquipmentCard
          src="/images/bikeperson.png"
          text="Bikes"
          alt="man on bike"
        />
        <HomeEquipmentCard
          src="/images/ellipticalperson.png"
          text="Ellipticals"
          alt="woman on elliptical"
        />
        <HomeEquipmentCard
          src="/images/pulley-person.png"
          text="Strength"
          alt="man using pulley"
        />
        <HomeEquipmentCard
          src="/images/woman-treadmill.png"
          text="Treadmills"
          alt="woman on treadmill"
        />
      </div>
    </div>
  );
}
