import styled from "styled-components";

type Props = {
  size: string;
  color: string;
  rotate: string;
};

const ArrowIcon = styled.i<Props>`
  display: block;
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
  transform: rotate(${props => props.rotate});

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  &::before {
    width: 0;
    height: 0;
    border-width: calc(${props => props.size} * 0.3);
    border-color: ${props => props.color} ${props => props.color} transparent
      transparent;
    border-style: solid;
    transform: rotate(45deg);
  }

  &::after {
    right: calc(${props => props.size} * 0.3);
    width: calc(${props => props.size} * 0.5);
    height: calc(${props => props.size} * 0.3);
    background-color: ${props => props.color};
  }
`;

export default ArrowIcon;
