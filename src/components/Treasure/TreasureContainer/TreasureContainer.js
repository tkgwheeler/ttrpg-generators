import React, { useEffect, useState } from "react";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import Label from "../../Common/Label/Label";

const TreasureContainer = props => {
  const { treasure, weightedRandomBag } = props;
  let item;

  const [treasureContained, setTreasureContained] = useState("");

  const handleClick = () => {
    let treasureContents = {
      container: weightedRandomBag(container),
      hidden: weightedRandomBag(treasureHiddenBy),
      trapped: weightedRandomBag(treasureTrappedBy),
    };
    setTreasureContained(treasureContents);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (treasure.length > 0) {
    item = (
      <Card
        title="Treasure Container"
        action={
          <Button handleClick={handleClick} label="Regenerate" type="link" />
        }
      >
        <Label text="Type" />
        <h2>{treasureContained.container}</h2>
        <Label text="Hidden by" />
        <p>{treasureContained.hidden}</p>
        <Label text="Trapped by" />
        <p>{treasureContained.trapped}</p>
      </Card>
    );
  }

  return <div style={{ marginBottom: "32px" }}>{item}</div>;
};

export default TreasureContainer;

const container = [
  {
    name: "Bags or Sacks",
    weight: 1,
  },
  {
    name: "Barrels or Cask",
    weight: 1,
  },
  {
    name: "Coffer or Kist",
    weight: 1,
  },
  {
    name: "Chest",
    weight: 1,
  },
  {
    name: "Huge Chest",
    weight: 1,
  },
  {
    name: "Trunk",
    weight: 1,
  },
  {
    name: "Urn",
    weight: 1,
  },
  {
    name: "Jar",
    weight: 1,
  },
  {
    name: "Niche",
    weight: 1,
  },
  {
    name: "Loose",
    weight: 1,
  },
];

const treasureHiddenBy = [
  {
    name: "Concealed",
    weight: 2,
  },
  {
    name: "Invisible",
    weight: 1,
  },
  {
    name: "Secret space under container",
    weight: 1,
  },
  {
    name: "Secret compartment",
    weight: 1,
  },
  {
    name: "Inside an ordinary item in plain view",
    weight: 1,
  },
  {
    name: "Disguised to appear as something else",
    weight: 1,
  },
  {
    name: "Under a heap of trash or dung",
    weight: 1,
  },
  {
    name: "Under a loose stone in the floor or wall",
    weight: 1,
  },
  {
    name: "In a nearby secret or concealed room",
    weight: 1,
  },
];

const treasureTrappedBy = [
  {
    name: "Contact Poison on Treasure",
    weight: 1,
  },
  {
    name: "Contact Poison on Container",
    weight: 1,
  },
  {
    name: "Poisoned needles in lock",
    weight: 2,
  },
  {
    name: "Poisoned needles in handle",
    weight: 3,
  },
  {
    name: "Poisoned spring darts in front",
    weight: 2,
  },
  {
    name: "Poisoned spring darts on top",
    weight: 2,
  },
  {
    name: "Poisoned Spring darts from inside lid",
    weight: 2,
  },
  {
    name: "Poisoned spring darts from inside bottom",
    weight: 2,
  },
  {
    name: "Blade scything across top",
    weight: 1,
  },
  {
    name: "Poisonous vermin (insects, reptiles)",
    weight: 1,
  },
  {
    name: "Poison Gas released",
    weight: 1,
  },
  {
    name: "Trap door opens",
    weight: 1,
  },
  {
    name: "Stone block drops",
    weight: 1,
  },
  {
    name: "Magic",
    weight: 1,
  },
];
