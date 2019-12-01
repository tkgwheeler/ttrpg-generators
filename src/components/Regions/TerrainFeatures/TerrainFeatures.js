import React from "react";
import Styles from "./TerrainFeatures.module.less";

const TerrainFeatures = props => {
  const { features } = props;

  if (!features) {
    return <div></div>;
  }

  const { isCoastal, isHilly, isMountains, isWetlands } = features;

  return (
    <div style={{ marginBottom: 24 }}>
      {isCoastal && <span className={Styles.feature}>Coastal</span>}
      {isHilly && <span className={Styles.feature}>Hilly</span>}
      {isMountains && <span className={Styles.feature}>Mountainous</span>}
      {isWetlands && <span className={Styles.feature}>Wetlands</span>}
    </div>
  );
};

export default TerrainFeatures;
