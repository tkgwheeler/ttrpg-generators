import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import ItemVal from "../../Common/ItemValue/ItemVal";
import Label from "../../Common/Label/Label";
import TreasureCard from "../../Common/TreasureCard/TreasureCard";
import TreasureContainer from "../TreasureContainer/TreasureContainer";

const Jewelry = props => {
  const { weightedRandomBag, value } = props;

  const [jewelryContained, setJewelryContained] = useState("");

  const queryData = useStaticQuery(graphql`
    {
      __typename
      allTreasureJewelryJson {
        nodes {
          weight
          name
        }
      }
    }
  `);

  const jewelryItem = queryData.allTreasureJewelryJson.nodes;

  const handleClick = () => {
    let jewelryContents = {
      item: weightedRandomBag(jewelryItem),
    };
    setJewelryContained(jewelryContents);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TreasureCard
      type="Jewelry"
      title={jewelryContained.item}
      value={value}
      action={<Button handleClick={handleClick} label="Jewelry" type="link" />}
      handleClick={handleClick}
    >
      <TreasureContainer weightedRandomBag={weightedRandomBag} />
    </TreasureCard>
  );
};

export default Jewelry;
