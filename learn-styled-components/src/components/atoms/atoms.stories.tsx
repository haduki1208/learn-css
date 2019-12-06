import React from "react";
import MenuButton from "./MenuButton";
import ArrowIcon from "./ArrowIcon";

export default { title: "atoms" };

export const menuButton = () => <MenuButton></MenuButton>;

export const arrowIcons = () => (
  <>
    <ArrowIcon size="30px" color="#f00" rotate="0deg"></ArrowIcon>
    <ArrowIcon size="40px" color="#0f0" rotate="90deg"></ArrowIcon>
    <ArrowIcon size="50px" color="#00f" rotate="180deg"></ArrowIcon>
    <ArrowIcon size="60px" color="#f0f" rotate="270deg"></ArrowIcon>
  </>
);
