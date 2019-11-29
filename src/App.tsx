import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import MenuButton from "./atoms/MenuButton";

const Wrapper = styled.section`
  margin: 1rem;
`;

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <>
      <Reset></Reset>
      <Wrapper>
        <MenuButton></MenuButton>
      </Wrapper>
    </>
  );
};

export default App;
