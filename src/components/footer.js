import React from "react";
import FooterList from "./footer-list";
import FooterSocial from "./footer-social";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <FooterList
          title="Company"
          items={["About", "Contact Us", "Careers"]}
        />
        <FooterList title="Account" items={["Log In", "Create Account"]} />
        <FooterList title="Support" items={["Help Center", "Accessibility"]} />
      </div>
      <div className="footer__mid">
        <FooterSocial src="/images/youtube.png" alt="youtube" />
        <FooterSocial src="/images/pintrest.png" alt="pintrest" />
        <FooterSocial src="/images/facebook.png" alt="facebook" />
        <FooterSocial src="/images/twitter.png" alt="twitter" />
        <FooterSocial src="/images/gram.png" alt="instagram" />
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom__language">English</p>
        <img className="footer__bottom__arrow" src="/images/arrow-down.png" alt="arrow down" />
        <div className="footer__bottom__copyright">
          <p className="footer__bottom__text footer__bottom__text--copyright">
            © iFit.com. All Rights Reserved.
          </p>
          <p className="footer__bottom__text footer__bottom__text--hoverable">
            Privacy Policy
          </p>
          <p className="footer__bottom__text footer__bottom__text--hoverable">
            Terms of Use
          </p>
        </div>
      </div>
    </div>
  );
}
