import React from "react";
import HomeReviewCard from "./home-review-card";

export default function HomeReviews() {
  return (
    <div className="home__reviews">
      <HomeReviewCard
        src="/images/gear-junkie-logo.svg"
        text='"You focus on putting in the work, and the technology handles the rest."'
        alt="Gear Junkies"
      />
      <HomeReviewCard
        src="/images/wired-logo.svg"
        text='"Literally transports you from home to wherever you choose to run."'
        alt="Wired"
      />
      <HomeReviewCard
        src="/images/mashable-logo.svg"
        text='"Breathes new life into a tired, old running routine."'
        alt="Mashable"
      />
      <HomeReviewCard
        src="/images/gear-junkie-logo.svg"
        text='"You focus on putting in the work, and the technology handles the rest."'
        alt="Gear Junkies"
      />
    </div>
  );
}
