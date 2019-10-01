import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import ItemVal from "../../Common/ItemValue/ItemVal";
import Label from "../../Common/Label/Label";

const Goods = props => {
  const { weightedRandomBag, value } = props;

  const [goodsContained, setGoodsContained] = useState("");

  const queryData = useStaticQuery(graphql`
    {
      __typename
      allTreasureGoodsJson {
        nodes {
          goodsHighValue {
            name
            weight
          }
          goodsLowValue {
            name
            weight
          }
        }
      }
    }
  `);

  const {
    goodsLowValue,
    goodsHighValue,
  } = queryData.allTreasureGoodsJson.nodes[0];

  const handleClick = () => {
    let goodsContents = {
      lowValue: weightedRandomBag(goodsLowValue),
      highValue: weightedRandomBag(goodsHighValue),
    };
    setGoodsContained(goodsContents);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card
      title="Goods"
      action={
        <Button handleClick={handleClick} label="Regenerate" type="link" />
      }
    >
      <Label text="Low value goods" />
      <p>{goodsContained.lowValue}</p>
      <Label text="High value goods" />
      <p>{goodsContained.highValue}</p>
      <ItemVal value={value} />
    </Card>
  );
};

export default Goods;
