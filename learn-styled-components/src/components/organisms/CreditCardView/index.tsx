import React from "react";
import styled from "styled-components";
import { TCreditCard } from "../CreditCard";

const CardWrapper = styled.div`
  position: relative;
  width: 85.6mm;
  height: 53.98mm;
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

const DD = styled.dd`
  height: 1.5rem;
  line-height: 1.5rem;
`;

type TProps = {
  creditCard: TCreditCard;
  isFocus: boolean;
};

const CreditCard: React.FC<TProps> = ({
  creditCard,
  isFocus
}: TProps): JSX.Element => (
  <CardWrapper>
    <CardFrontSide aria-hidden={isFocus}>
      <dl>
        <dt>number</dt>
        <DD>{creditCard.number}</DD>
        <dt>name</dt>
        <DD>{creditCard.name}</DD>
        <dt>expires</dt>
        <DD>
          <span>{creditCard.month}</span>
          <span>/</span>
          <span>{creditCard.year}</span>
        </DD>
      </dl>
    </CardFrontSide>
    <CardReverseSide aria-hidden={!isFocus}>
      <dt>cw</dt>
      <DD>{creditCard.cw}</DD>
    </CardReverseSide>
  </CardWrapper>
);

export default CreditCard;
