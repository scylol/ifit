import React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/home-hero";
import HomeReviews from "../components/home-reviews";
import HomeWorkouts from "../components/home-workouts";
import HomeEquipment from "../components/home-equipment";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <HomeHero />
        <HomeReviews />
        <HomeWorkouts />
        <HomeEquipment />
      </div>
    </Layout>
  );
}
