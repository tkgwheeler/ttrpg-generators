import React from "react";
import TreasureContainer from "../TreasureContainer/TreasureContainer";
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

  return (
    <div>
      <TreasureContainer
        treasure={treasureList}
        weightedRandomBag={weightedRandomBag}
      />
      <div style={{ width: "80%", margin: "0 auto" }}>{listItems}</div>
    </div>
  );
};

export default TreasureList;
