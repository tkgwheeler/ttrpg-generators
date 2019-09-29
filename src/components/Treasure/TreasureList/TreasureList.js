import React from "react";
import TreasureItem from "../TreasureItem/TreasureItem";

const TreasureList = props => {
  const { weightedRandomBag, treasureList } = props;

  const listItems = treasureList.map((item, index) => {
    return (
      <TreasureItem
        key={index}
        treasure={item}
        weightedRandomBag={weightedRandomBag}
      />
    );
  });

  return <div style={{ width: "80%", margin: "0 auto" }}>{listItems}</div>;
};

export default TreasureList;
