import React from "react";
import styled from "styled-components";

const MenuButton = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #444;
  > * {
    position: absolute;
    width: 80%;
    height: 4px;
    background-color: #444;
    right: 0;
    left: 0;
    margin: auto;
    transition: all 0.5s;
    &:nth-child(1) {
      top: 15%;
    }
    &:nth-child(2) {
      top: 0;
      bottom: 0;
    }
    &:nth-child(3) {
      bottom: 15%;
    }
  }
  &:hover {
    > * {
      &:nth-child(1) {
        top: 45%;
        transform: rotate(315deg);
      }
      &:nth-child(2) {
        width: 0;
      }
      &:nth-child(3) {
        bottom: 45%;
        transform: rotate(-315deg);
      }
    }
  }
`;

export default (): JSX.Element => (
  <MenuButton>
    <div></div>
    <div></div>
    <div></div>
  </MenuButton>
);
