import React from "react";
import styled from "styled-components";

const MenuButton = styled.button`
  appearance: none;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #444;
  padding: 0;
`;

const BaseBorder = styled.div`
  position: absolute;
  width: 80%;
  height: 4px;
  background-color: #444;
  right: 0;
  left: 0;
  margin: auto;
  transition: all 0.5s;
`;

const BorderTop = styled(BaseBorder)`
  top: 15%;
  ${MenuButton}:hover & {
    top: 45%;
    transform: rotate(315deg);
  }
`;

const BorderMiddle = styled(BaseBorder)`
  top: 0;
  bottom: 0;
  ${MenuButton}:hover & {
    width: 0;
  }
`;

const BorderBottom = styled(BaseBorder)`
  bottom: 15%;
  ${MenuButton}:hover & {
    bottom: 45%;
    transform: rotate(-315deg);
  }
`;

export default (): JSX.Element => (
  <MenuButton>
    <BorderTop></BorderTop>
    <BorderMiddle></BorderMiddle>
    <BorderBottom></BorderBottom>
  </MenuButton>
);
