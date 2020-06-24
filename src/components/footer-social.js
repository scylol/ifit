import React from "react";

export default function FooterSocial(props) {
  return (
    <div className="footer__social">
      <img
        className="footer__social__circle"
        src="/images/social-circle.png"
        alt="circle"
      />
      <img
        className={`footer__social__icon footer__social__icon--${props.alt}`}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
