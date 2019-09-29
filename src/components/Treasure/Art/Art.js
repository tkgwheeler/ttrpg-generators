import React, { useEffect, useState } from "react";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import Label from "../../Common/Label/Label";

const Art = props => {
  const { weightedRandomBag } = props;

  const [artContained, setArtContained] = useState("");

  const handleClick = () => {
    let artContents = {
      material: weightedRandomBag(artMaterial),
      subject: weightedRandomBag(artSubject),
      renown: weightedRandomBag(artRenown),
      materialQuality: weightedRandomBag(artMaterialQuality),
      age: weightedRandomBag(artAge),
      size: weightedRandomBag(artSize),
      quality: weightedRandomBag(artQuality),
      condition: weightedRandomBag(artCondition),
    };
    setArtContained(artContents);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Card
      title="Art"
      action={
        <Button handleClick={handleClick} label="Regenerate" type="link" />
      }
    >
      <Label text="Subject" />
      <h2>{artContained.subject}</h2>
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
    </Card>
  );
};

export default Art;

const artMaterial = [
  {
    name: "Paper art (prints, calligraphy, illustrated manuscript)",
    weight: 2,
  },
  {
    name: "Fabric art (tapestry, embroidery, quilt)",
    weight: 2,
  },
  {
    name: "Painting (watercolor, oils, acrylics, enamels)",
    weight: 2,
  },
  {
    name: "Crafts (Doll making, Bookbinding)",
    weight: 2,
  },
  {
    name: "Carving (woodwork, scrimshaw, bone, ivory, scales)",
    weight: 2,
  },
  {
    name: "Ceramics (pottery, urns, statuary, china)",
    weight: 2,
  },
  {
    name: "Glasswork (decanters, chandeliers, goblets, pipes, bowls, windows)",
    weight: 2,
  },
  {
    name: "Stonework (Statues, birdbaths, plaques)",
    weight: 2,
  },
  {
    name: "Metalwork (sculpture, furnishings, decorative)",
    weight: 2,
  },
  {
    name: "Magical",
    weight: 1,
  },
];

const artSubject = [
  {
    name: "Abstract (-2 Value)",
    weight: 1,
  },
  {
    name: "Monster (-1 Value)",
    weight: 1,
  },
  {
    name: "Humanoid",
    weight: 1,
  },
  {
    name: "Natural",
    weight: 2,
  },
  {
    name: "Supernatural",
    weight: 1,
  },
  {
    name: "Local",
    weight: 3,
  },
  {
    name: "Historical",
    weight: 3,
  },
  {
    name: "Religious",
    weight: 5,
  },
  {
    name: "Wealthy/Noble (+1 Value)",
    weight: 2,
  },
  {
    name: "Royalty (+2 Value)",
    weight: 1,
  },
];

const artRenown = [
  {
    name: "Unknown (-3)",
    weight: 4,
  },
  {
    name: "Obscure (-2)",
    weight: 4,
  },
  {
    name: "Locally known (-1)",
    weight: 4,
  },
  {
    name: "Regionally known (0)",
    weight: 6,
  },
  {
    name: "Nationally known (+1)",
    weight: 6,
  },
  {
    name: "Continentally known (+2)",
    weight: 3,
  },
  {
    name: "World renowned (+3)",
    weight: 2,
  },
  {
    name: "Ubiquitous (+4)",
    weight: 1,
  },
];

const artMaterialQuality = [
  {
    name: "Awful (-3)",
    weight: 3,
  },
  {
    name: "Poor (-2)",
    weight: 3,
  },
  {
    name: "Below Average (-1)",
    weight: 6,
  },
  {
    name: "Average (0)",
    weight: 9,
  },
  {
    name: "Above Average (+1)",
    weight: 6,
  },
  {
    name: "Good (+2)",
    weight: 3,
  },
  {
    name: "Excellent (+3)",
    weight: 3,
  },
  {
    name: "Finest (+4)",
    weight: 2,
  },
  {
    name: "Unique (+5)",
    weight: 1,
  },
];

const artAge = [
  {
    name: "Avant-garde (-3)",
    weight: 4,
  },
  {
    name: "Current (-2)",
    weight: 4,
  },
  {
    name: "Recent (-1)",
    weight: 12,
  },
  {
    name: "Contemporary (0)",
    weight: 24,
  },
  {
    name: "Modern (+1)",
    weight: 12,
  },
  {
    name: "Old (+2)",
    weight: 4,
  },
  {
    name: "Antique (+3)",
    weight: 4,
  },
  {
    name: "Venerable (+4)",
    weight: 3,
  },
  {
    name: "Archaic (+5)",
    weight: 2,
  },
  {
    name: "Antediluvian (+6)",
    weight: 1,
  },
  {
    name: "Primordial (+7)",
    weight: 1,
  },
];

const artSize = [
  {
    name: "Tiny (-3)",
    weight: 4,
  },
  {
    name: "Very Small (-2)",
    weight: 4,
  },
  {
    name: "Small (-1)",
    weight: 12,
  },
  {
    name: "Average (0)",
    weight: 24,
  },
  {
    name: "Large (+1)",
    weight: 12,
  },
  {
    name: "Very Large (+2)",
    weight: 4,
  },
  {
    name: "Huge (+3)",
    weight: 4,
  },
  {
    name: "Massive (+4)",
    weight: 3,
  },
  {
    name: "Gargantuan (+5)",
    weight: 1,
  },
];

const artQuality = [
  {
    name: "Awful (-3)",
    weight: 4,
  },
  {
    name: "Poor (-2)",
    weight: 4,
  },
  {
    name: "Below Average (-1)",
    weight: 12,
  },
  {
    name: "Average (0)",
    weight: 24,
  },
  {
    name: "Above Average (+1)",
    weight: 12,
  },
  {
    name: "Good (+2)",
    weight: 4,
  },
  {
    name: "Excellent (+3)",
    weight: 4,
  },
  {
    name: "Brilliant (+4)",
    weight: 3,
  },
  {
    name: "Masterpiece (+5)",
    weight: 1,
  },
];

const artCondition = [
  {
    name: "Badly Damaged (-3)",
    weight: 4,
  },
  {
    name: "Damaged (-2)",
    weight: 4,
  },
  {
    name: "Worn (-1)",
    weight: 12,
  },
  {
    name: "Average (0)",
    weight: 24,
  },
  {
    name: "Good (+1)",
    weight: 12,
  },
  {
    name: "Excellent (+2)",
    weight: 4,
  },
  {
    name: "Near Perfect (+3)",
    weight: 4,
  },
  {
    name: "Perfect Condition (+4)",
    weight: 3,
  },
  {
    name: "Flawless (+5)",
    weight: 1,
  },
];
