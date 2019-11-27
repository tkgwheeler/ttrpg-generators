import CardStyles from "./card.module.less";
import React from "react";

const Card = props => {
  return (
    <div className={CardStyles.frame}>
      <div>
        <span>{props.title}</span>
        {props.action}
      </div>
      <div className={CardStyles.body}>{props.children}</div>
    </div>
  );
};

export default Card;
