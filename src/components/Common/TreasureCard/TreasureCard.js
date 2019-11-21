import IconButton from "../Button/IconButton";
import ItemValue from "../ItemValue/ItemVal";
import React from "react";
import Styles from "./treasureCard.module.less";

const TreasureCard = props => {
  return (
    <div className={Styles.frame}>
      <div className={Styles.header}>
        <div className={Styles.headerTitleWrapper}>
          <div className={Styles.headerTitle}>{props.title}</div>
          <IconButton handleClick={props.handleClick} />
        </div>
        <div className={Styles.headerType}>{props.type}</div>
      </div>
      <div style={{ marginBottom: "16px" }}>{props.children}</div>
      <ItemValue value={props.value} />
    </div>
  );
};

export default TreasureCard;
