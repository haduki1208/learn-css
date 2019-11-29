import React from "react";
import style from "./style.scss";

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <div>
      <h2 className={style.hoge}>hello</h2>
      <ul>
        <li>foo</li>
        <li>foo</li>
        <li>foo</li>
      </ul>
      <button>aaa</button>
    </div>
  );
};

export default App;
