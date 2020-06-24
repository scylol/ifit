import React from "react";
import HomeReviewCard from "./home-review-card";

export default function HomeReviews() {
  return (
    <div className="home__reviews">
      <div className="home__review__card home__review__card--partialFirst">
        <img
          className="home__review__card__oval home__review__card__oval--left"
          src="images/oval.png"
        />
        <img
          className="home__review__card__arrow home__review__card__arrow--left"
          src="images/left-arrow.png"
        />
      </div>

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
      <div className="home__review__card home__review__card--partialLast">
        <img
          className="home__review__card__oval home__review__card__oval--right"
          src="images/oval.png"
        />
        <img
          className="home__review__card__arrow home__review__card__arrow--right"
          src="images/right-arrow.png"
        />
      </div>
    </div>
  );
}
