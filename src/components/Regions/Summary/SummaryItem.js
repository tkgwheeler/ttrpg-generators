import React from "react";

const SummaryItem = props => {
  const { label, content, suffix } = props;

  return (
    <div style={{ marginBottom: 16 }}>
      <span style={{ fontSize: 22, fontWeight: 600, marginRight: 8 }}>
        {label}
      </span>
      <span style={{ fontSize: 22 }}>
        {content}
        {suffix && ` ${suffix}`}
      </span>
    </div>
  );
};

export default SummaryItem;
