import React, { useState } from "react";
import styled from "styled-components";
import CreditCard from "../CreditCard";

export default (): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <article>
      <CreditCard isFocus={isFocus}></CreditCard>
      <form>
        <td>Card Number</td>
        <dd>
          <input type="text" />
        </dd>
        <span>Card Name</span>
        <dd>
          <input type="text" />
        </dd>
        <span>Expiration Date</span>
        <dd>
          <select></select>
          <select></select>
        </dd>
        <span>CW</span>
        <dd>
          <input
            type="text"
            onFocus={(): void => setIsFocus(true)}
            onBlur={(): void => setIsFocus(false)}
          />
        </dd>
        <button type="submit">submit</button>
      </form>
    </article>
  );
};
