import React from "react";

const sectionStyle: React.CSSProperties = {
  margin: "1rem"
};

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <section style={sectionStyle}>
      <h2>Hello world!</h2>
    </section>
  );
};

export default App;
