import React from "react";
import MenuButton from "./components/atoms/MenuButton";

const sectionStyle: React.CSSProperties = {
  margin: "1rem"
};

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <section style={sectionStyle}>
      <MenuButton></MenuButton>
    </section>
  );
};

export default App;
