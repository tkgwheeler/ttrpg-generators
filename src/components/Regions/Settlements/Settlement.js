import React, { useEffect } from "react";

const Settlement = props => {
  const { population } = props;
  return (
    <div>
      <p>{` A ${
        population < 500 ? "small" : population > 2500 ? "large" : ""
      } town of ${population} people`}</p>
    </div>
  );
};

export default Settlement;
{
  /* <h2>Settlement</h2>
      <p>Population: {population}</p>
      <p>
        Cultivated land: {arableArea} sq.miles {arablePercent}%
      </p>
      <p>
        Wild lands: {wildArea} sq.miles {wildPercent}%
      </p> */
}
