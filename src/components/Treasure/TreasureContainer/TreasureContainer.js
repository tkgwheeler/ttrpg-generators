import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import Label from "../../Common/Label/Label";

const TreasureContainer = props => {
  const { treasure, weightedRandomBag } = props;

  const [treasureContained, setTreasureContained] = useState("");

  const queryData = useStaticQuery(graphql`
    {
      allTreasureContainersJson {
        edges {
          node {
            type {
              name
              weight
            }
            trappedBy {
              name
              weight
            }
            hiddenBy {
              name
              weight
            }
          }
        }
      }
    }
  `);

  const {
    type,
    trappedBy,
    hiddenBy,
  } = queryData.allTreasureContainersJson.edges[0].node;
  let item;

  const handleClick = () => {
    let treasureContents = {
      container: weightedRandomBag(type),
      hidden: weightedRandomBag(hiddenBy),
      trapped: weightedRandomBag(trappedBy),
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
        <h3>{treasureContained.container}</h3>
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
