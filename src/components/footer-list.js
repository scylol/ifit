import React from "react";

export default function FooterList(props) {
  return (
    <div class="footer__list">
      <h3 class="footer__list__title">{props.title}</h3>
      {props.items.map(item => {
        return <h4 class="footer__list__content">{item}</h4>;
      })}
    </div>
  );
}
