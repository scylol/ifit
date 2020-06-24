import React from "react";
import MainHeader from "./main-header"
import SubHeader from "./sub-header"
import Footer from "./footer"

export default ({ children }) => (
  <div className="app__container">
    <MainHeader />
    <SubHeader />
    <div className="main__container">{children}</div>
    <Footer />
  </div>
);
