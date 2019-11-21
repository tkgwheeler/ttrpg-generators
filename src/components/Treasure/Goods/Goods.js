import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../Common/Button/Button";
import TreasureCard from "../../Common/TreasureCard/TreasureCard";
import TreasureContainer from "../TreasureContainer/TreasureContainer";
import { randomIntInRange } from "../../../utils/utils";

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
    let goodsContents =
      randomIntInRange(1, 4) === 4
        ? weightedRandomBag(goodsHighValue)
        : weightedRandomBag(goodsLowValue);
    setGoodsContained(goodsContents);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TreasureCard
      type="Goods"
      title={goodsContained}
      value={value}
      action={<Button handleClick={handleClick} label="Goods" type="link" />}
      handleClick={handleClick}
    >
      <TreasureContainer weightedRandomBag={weightedRandomBag} />
    </TreasureCard>
  );
};

export default Goods;
