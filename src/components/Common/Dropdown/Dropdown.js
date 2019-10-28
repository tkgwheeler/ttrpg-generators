import React, { useEffect, useState } from "react";

import Styles from "./dropdown.module.less";

const Dropdown = props => {
  const [visible, setVisible] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(props.title);
  const [selectedItem, setSelectedItem] = useState(() =>
    props.list.find(e => e.id === props.default)
  );

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const selectItem = item => {
    props.toggleItem(item);
    setSelectedItem(item);
    toggleVisible();
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header} onClick={() => toggleVisible()}>
        <div className="title">
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
