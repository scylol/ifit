import React from "react";

export default function FooterList(props) {
  return (
    <div className="footer__list">
      <h3 className="footer__list__title">{props.title}</h3>
      {props.items.map(item => {
        return <h4 className="footer__list__content">{item}</h4>;
      })}
    </div>
  );
}
