import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../Common/Button/Button";
import TreasureCard from "../../Common/TreasureCard/TreasureCard";
import TreasureContainer from "../TreasureContainer/TreasureContainer";

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
    let coin = weightedRandomBag(coinType);
    let goldMultiplier;
    switch (coin) {
      default:
        goldMultiplier = 1;
        break;
      case "Copper":
        goldMultiplier = 100;
        break;
      case "Silver":
        goldMultiplier = 10;
        break;
      case "Electrum":
        goldMultiplier = 2;
        break;
      case "Platinum":
        goldMultiplier = 0.1;
        break;
    }

    let coinsContents = {
      type: coin,
      coinCount: Math.floor(value * goldMultiplier),
    };
    setCoinsContained(coinsContents);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TreasureCard
      type="Coins"
      title={`${coinsContained.coinCount} ${coinsContained.type} coins`}
      value={
        coinsContained.type === "Platinum"
          ? coinsContained.coinCount * 10
          : value
      }
      action={<Button handleClick={handleClick} label="Coins" type="link" />}
      handleClick={handleClick}
    >
      <TreasureContainer weightedRandomBag={weightedRandomBag} />
    </TreasureCard>
  );
};

export default Coins;
