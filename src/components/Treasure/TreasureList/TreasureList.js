import React from "react";
import TreasureContainer from "../TreasureContainer/TreasureContainer";
import TreasureItem from "../TreasureItem/TreasureItem";

const TreasureList = props => {
  const { weightedRandomBag, treasureList, value } = props;

  const listItems = treasureList.map((item, index) => {
    return (
      <div key={index}>
        <TreasureContainer
          treasure={treasureList}
          weightedRandomBag={weightedRandomBag}
        />
        <div style={{ width: "80%", margin: "0 auto" }}>
          <TreasureItem treasure={item} weightedRandomBag={weightedRandomBag} />
        </div>
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default TreasureList;
