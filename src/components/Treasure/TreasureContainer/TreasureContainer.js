import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import IconButton from "../../Common/Button/IconButton";
import Label from "../../Common/Label/Label";
import Styles from "./treasureContainer.module.less";
import { randomIntInRange } from "../../../utils/utils";

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
      hidden: randomIntInRange(1, 6) === 1 ? weightedRandomBag(hiddenBy) : "",
      trapped:
        randomIntInRange(1, 10) === 1 ? weightedRandomBag(trappedBy) : "",
    };
    setTreasureContained(treasureContents);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treasure]);

  item = (
    <>
      <div className={Styles.header}>
        <div style={{ display: "flex" }}>
          <div className={Styles.typeLabel}>Container:</div>
          <div className={Styles.type}>{treasureContained.container}</div>
        </div>
        <div>
          <IconButton handleClick={handleClick} />
        </div>
      </div>
      <hr style={{ marginBottom: "4px" }} />
      {treasureContained.hidden && (
        <>
          <Label text="Hidden by" />
          <p>{treasureContained.hidden}</p>
        </>
      )}
      {treasureContained.trapped && (
        <>
          <Label text="Trapped by" />
          <p>{treasureContained.trapped}</p>
        </>
      )}
    </>
  );

  return <div>{item}</div>;
};

export default TreasureContainer;
