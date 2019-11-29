import React from "react";
import MenuButton from "./components/atoms/MenuButton";

const style: React.CSSProperties = {
  margin: "1rem"
};

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <section style={style}>
      <MenuButton></MenuButton>
    </section>
  );
};

export default App;
