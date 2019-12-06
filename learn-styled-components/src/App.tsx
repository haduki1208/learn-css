import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

const Wrapper = styled.section`
  margin: 1rem;
`;

const Title = styled.h2``;

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <>
      <Reset></Reset>
      <Wrapper>
        <Title>Hello world!</Title>
      </Wrapper>
    </>
  );
};

export default App;
