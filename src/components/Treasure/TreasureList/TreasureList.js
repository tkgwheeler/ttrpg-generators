import React from "react";
import TreasureItem from "../TreasureItem/TreasureItem";

const TreasureList = props => {
  const { weightedRandomBag, treasureList } = props;

  const listItems = treasureList.map((item, index) => {
    return (
      <div style={{ margin: "0 auto" }} key={index}>
        <TreasureItem treasure={item} weightedRandomBag={weightedRandomBag} />
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default TreasureList;
