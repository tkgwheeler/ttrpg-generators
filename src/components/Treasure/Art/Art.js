import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import ItemVal from "../../Common/ItemValue/ItemVal";
import Label from "../../Common/Label/Label";

const Art = props => {
  const { weightedRandomBag, value } = props;

  const [artContained, setArtContained] = useState("");

  const queryData = useStaticQuery(graphql`
    {
      allTreasureArtJson {
        nodes {
          material {
            weight
            name
          }
          subject {
            name
            weight
          }
          size {
            name
            weight
          }
          renown {
            name
            weight
          }
          quality {
            name
            weight
          }
          materialQuality {
            name
            weight
          }
          age {
            name
            weight
          }
          condition {
            name
            weight
          }
        }
      }
    }
  `);

  const {
    material,
    subject,
    size,
    renown,
    quality,
    materialQuality,
    age,
    condition,
  } = queryData.allTreasureArtJson.nodes[0];

  const handleClick = () => {
    let artContents = {
      material: weightedRandomBag(material),
      subject: weightedRandomBag(subject),
      renown: weightedRandomBag(renown),
      materialQuality: weightedRandomBag(materialQuality),
      age: weightedRandomBag(age),
      size: weightedRandomBag(size),
      quality: weightedRandomBag(quality),
      condition: weightedRandomBag(condition),
    };
    setArtContained(artContents);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card
      title="Art"
      action={
        <Button handleClick={handleClick} label="Regenerate" type="link" />
      }
    >
      <Label text="Subject" />
      <h3>{artContained.subject}</h3>
      <Label text="Material" />
      <p>{artContained.material}</p>
      <Label text="Renown" />
      <p>{artContained.renown}</p>
      <Label text="Material quality" />
      <p>{artContained.materialQuality}</p>
      <Label text="Age" />
      <p>{artContained.age}</p>
      <Label text="Size" />
      <p>{artContained.size}</p>
      <Label text="Quality of art" />
      <p>{artContained.quality}</p>
      <Label text="Condition" />
      <p>{artContained.condition}</p>
      <ItemVal value={value} />
    </Card>
  );
};

export default Art;
