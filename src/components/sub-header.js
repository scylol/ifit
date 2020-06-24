import React from "react";

export default function SubHeader() {
  return (
    <div className="sub__header">
      <div className="sub__header__left">
          <img src="/images/ifit-coach-logo.svg" alt="ifit coach logo"/>
      </div>
      <div className="sub__header__middle">
        <div className="sub__header__item"> EXERCISE</div>
        <div className="sub__header__item"> NUTRITION</div>
        <div className="sub__header__item"> ACTIVITY</div>
        <div className="sub__header__item"> SLEEP</div>
      </div>
      <div className="sub__header__right">
          <button className="sub__header__sign__up">SIGN UP</button>
      </div>
    </div>
  );
}
