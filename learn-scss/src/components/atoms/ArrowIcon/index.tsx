import React from "react";
import style from "./style.scss";

type Props = {
  size: string;
  color: string;
  rotate: string;
};

const ArrowIcon: React.FC<Props> = ({
  size,
  color,
  rotate
}: Props): JSX.Element => {
  const inlineStyle: any = {
    "--size": size,
    "--color": color,
    "--rotate": rotate
  };
  return <i className={style.arrow} style={inlineStyle} />;
};

export default ArrowIcon;
