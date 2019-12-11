import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  width: 430px;
  height: 270px;
`;

const CardBase = styled.div`
  border: 1px solid #111;
  background-color: #111;
  color: #eee;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const CardFrontSide = styled(CardBase)`
  z-index: 100;
  transform: rotateY(0deg);
  transition: all 0.3s 0.3s linear;
  &[aria-hidden="true"] {
    visibility: hidden;
    z-index: 0;
    transform: rotateY(90deg);
    transition: all 0.3s linear;
  }
`;

const CardReverseSide = styled(CardBase)`
  z-index: 100;
  transform: rotateY(360deg);
  transition: all 0.3s 0.3s linear;
  &[aria-hidden="true"] {
    visibility: hidden;
    z-index: 0;
    transform: rotateY(270deg);
    transition: all 0.3s linear;
  }
`;

type TProps = {
  isFocus: boolean;
};

const CreditCard: React.FC<TProps> = ({ isFocus }: TProps): JSX.Element => (
  <CardWrapper>
    <CardFrontSide aria-hidden={isFocus}>
      <div>hoge</div>
      <div>fuga</div>
      <div>piyo</div>
    </CardFrontSide>
    <CardReverseSide aria-hidden={!isFocus}>
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </CardReverseSide>
  </CardWrapper>
);

export default CreditCard;
