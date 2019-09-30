import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import Label from "../../Common/Label/Label";

const Jewelry = props => {
  const { weightedRandomBag } = props;

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
    <Card
      title="Jewelry"
      action={
        <Button handleClick={handleClick} label="Regenerate" type="link" />
      }
    >
      <Label text="Type" />
      <h3>{jewelryContained.item}</h3>
    </Card>
  );
};

export default Jewelry;
