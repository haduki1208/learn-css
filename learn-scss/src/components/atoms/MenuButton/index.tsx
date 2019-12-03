import React from "react";
import style from "./style.scss";

const MenuButton: React.FC<{}> = (): JSX.Element => {
  return (
    <button className={style.menu_button}>
      <div className={style.border_top}></div>
      <div className={style.border_middle}></div>
      <div className={style.border_bottom}></div>
    </button>
  );
};

export default MenuButton;
