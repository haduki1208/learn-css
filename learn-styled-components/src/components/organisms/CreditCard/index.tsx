import React, { useState } from "react";
import styled from "styled-components";
import CreditCardView from "../CreditCardView";
import CreditCardForm from "../CreditCardForm";

export type TCreditCard = {
  number: string;
  name: string;
  month: string;
  year: string;
  cw: string;
};

const MONTH_LIST = Array(12)
  .fill(0)
  .map((_, index): string => String(index + 1).padStart(2, "0"));
const YEAR_LIST = Array(12)
  .fill(new Date().getFullYear())
  .map((year, index): string => String(year + index));

export default (): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);
  const [creditCard, setCreditCard] = useState<TCreditCard>({
    number: "",
    name: "",
    month: MONTH_LIST[0],
    year: YEAR_LIST[0],
    cw: ""
  });

  const changeCardContent = (key: keyof TCreditCard, value: string): void =>
    setCreditCard({ ...creditCard, [key]: value });
  const focusCW = (isFocus: boolean): void => setIsFocus(isFocus);

  return (
    <article>
      <CreditCardView
        creditCard={creditCard}
        isFocus={isFocus}
      ></CreditCardView>
      <CreditCardForm
        creditCard={creditCard}
        monthList={MONTH_LIST}
        yearList={YEAR_LIST}
        changeCardContent={changeCardContent}
        focusCW={focusCW}
      ></CreditCardForm>
    </article>
  );
};
