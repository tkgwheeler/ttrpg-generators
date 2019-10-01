import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import ItemVal from "../../Common/ItemValue/ItemVal";
import Label from "../../Common/Label/Label";

const Coins = props => {
  const { weightedRandomBag, value } = props;

  const [coinsContained, setCoinsContained] = useState("");

  const queryData = useStaticQuery(graphql`
    {
      allTreasureCoinsJson {
        nodes {
          name
          weight
        }
      }
    }
  `);

  const coinType = queryData.allTreasureCoinsJson.nodes;

  const handleClick = () => {
    let coinsContents = {
      type: weightedRandomBag(coinType),
    };
    setCoinsContained(coinsContents);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card
      title="Coins"
      action={
        <Button handleClick={handleClick} label="Regenerate" type="link" />
      }
    >
      <Label text="Coin type" />
      <h3>{coinsContained.type}</h3>
      <ItemVal value={value} />
    </Card>
  );
};

export default Coins;
