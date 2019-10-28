import React, { useEffect, useState } from "react";

import Styles from "./dropdown.module.less";

const Dropdown = props => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(() =>
    props.list.find(e => e.id === props.default)
  );

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const selectItem = item => {
    if (props.toggleItem) props.toggleItem(item);
    setSelectedItem(item);
    toggleVisible();
  };

  return (
    <div
      className={`${Styles.wrapper} ${visible ? Styles.wrapperVisible : ""}`}
    >
      <div className={Styles.header} onClick={() => toggleVisible()}>
        <div className={Styles.title}>
          {selectedItem ? selectedItem.title : props.title}
        </div>
        <div className="arrow"></div>
      </div>
      {visible && (
        <ul className={Styles.list}>
          {props.list.map(item => {
            return (
              <li
                className={Styles.listItem}
                key={item.id}
                onClick={() => {
                  selectItem(item);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
