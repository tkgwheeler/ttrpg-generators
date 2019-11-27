import Label from "../../Common/Label/Label";
import React from "react";

const Geography = props => {
  const { region } = props;

  if (!region) {
    return <div></div>;
  }

  const {
    elevation: { low, high },
    features: { isCoastal, isHilly, isMountains },
    population,
  } = region[0];

  return (
    <div>
      <h1>Geography</h1>
      <Label text="Area" />
      <p>{population.totalArea} miles²</p>
      <Label text="Elevation" />
      <p>
        {low.low} - {high.high} meters
      </p>
      {(isCoastal || isHilly || isMountains) && <Label text="Features" />}
      <div>
        {isCoastal && <span>Coastal</span>}
        {isHilly && <span>Hilly</span>}
        {isMountains && <span>Mountainous</span>}
      </div>
    </div>
  );
};

export default Geography;
