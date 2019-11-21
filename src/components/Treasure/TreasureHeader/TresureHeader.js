import Button from "../../Common/Button/Button";
import Dropdown from "../../Common/Dropdown/Dropdown";
import Label from "../../Common/Label/Label";
import React from "react";

const TreasureHeader = props => {
  const { handleClick, toggleGoldRange, toggleCR } = props;

  return (
    <div style={{ marginBottom: "40px" }}>
      <h1>Treasure</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "8px",
            marginRight: "16px",
          }}
        >
          <Label text="Gold range" />
          <Dropdown
            title="Gold Range"
            list={goldRangeList}
            toggleItem={toggleGoldRange}
            default={1}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "8px",
          }}
        >
          <Label text="Challenge rating" />
          <Dropdown
            title="CR rating"
            list={challengeRatingList}
            toggleItem={toggleCR}
            default={1}
          />
        </div>
      </div>
      <Button handleClick={handleClick} label="Get Treasure" type="primary" />
    </div>
  );
};

export default TreasureHeader;

const goldRangeList = [
  {
    id: 1,
    title: "Low",
    goldRange: [100, 300],
  },
  {
    id: 2,
    title: "Medium",
    goldRange: [400, 600],
  },
  {
    id: 3,
    title: "High",
    goldRange: [800, 1200],
  },
];

const challengeRatingList = [
  {
    id: 1,
    title: "0-4",
    multiplier: 1,
  },
  {
    id: 2,
    title: "5-10",
    multiplier: 6,
  },
  {
    id: 3,
    title: "11-16",
    multiplier: 10,
  },
  {
    id: 4,
    title: "17+",
    multiplier: 14,
  },
];
