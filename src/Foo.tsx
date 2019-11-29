import React, { useState } from "react";

const Foo: React.FC<{}> = (): JSX.Element => {
  const [message, setMessage] = useState("hello world");

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Foo;
