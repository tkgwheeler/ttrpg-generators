import React from "react";
import Styles from "./TerrainFeatures.module.less";

const TerrainFeatures = props => {
  const { region } = props;

  if (!region) {
    return <div></div>;
  }

  const {
    features: { isCoastal, isHilly, isMountains },
  } = region[0];

  return (
    <div style={{ marginBottom: 24 }}>
      {isCoastal && <span className={Styles.feature}>Coastal</span>}
      {isHilly && <span className={Styles.feature}>Hilly</span>}
      {isMountains && <span className={Styles.feature}>Mountainous</span>}
    </div>
  );
};

export default TerrainFeatures;
