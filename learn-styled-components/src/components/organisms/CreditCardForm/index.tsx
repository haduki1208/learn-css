import React, { useState } from "react";
import styled from "styled-components";
import { TCreditCard } from "../CreditCard";

type TProps = {
  creditCard: TCreditCard;
  monthList: string[];
  yearList: string[];
  changeCardContent: (key: keyof TCreditCard, value: string) => void;
  focusCW: (isFocus: boolean) => void;
};

const renderOption = (value: string): JSX.Element => (
  <option key={value} value={value}>
    {value}
  </option>
);

const Form = styled.form`
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Fieldset = styled.fieldset`
  appearance: none;
  margin: 0 auto;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Legend = styled.legend`
  font-size: 0.8rem;
`;

const InputBox = styled.input`
  appearance: none;
  border: 1.25px solid #bbb;
  border-radius: 4px;
  padding: 4px 8px;
  height: 2.25rem;
  line-height: 2.25rem;
  width: 100%;
  font-size: 0.8rem;
  box-sizing: border-box;
`;

const DateWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const DateSelect = styled.select`
  border-radius: 4px;
  height: 2.25rem;
  line-height: 2.25rem;
  width: 40%;
  font-size: 0.8rem;
  margin-right: 8px;
  background-color: #fff;
  box-sizing: border-box;
`;

const CreditCardForm: React.FC<TProps> = ({
  creditCard,
  monthList,
  yearList,
  changeCardContent,
  focusCW
}: TProps): JSX.Element => {
  return (
    <Form>
      <Fieldset>
        <Legend>Card Number</Legend>
        <InputBox
          type="text"
          pattern="\d{14,16}"
          value={creditCard.number}
          onChange={({ currentTarget }): void =>
            changeCardContent("number", currentTarget.value)
          }
        />
      </Fieldset>
      <Fieldset>
        <Legend>Card Name</Legend>
        <InputBox
          type="text"
          value={creditCard.name}
          onChange={({ currentTarget }): void =>
            changeCardContent("name", currentTarget.value)
          }
        />
      </Fieldset>
      <Fieldset style={{ width: "70%" }}>
        <Legend>Expiration Date</Legend>
        <DateWrapper>
          <DateSelect
            value={creditCard.month}
            onChange={({ currentTarget }): void =>
              changeCardContent("month", currentTarget.value)
            }
          >
            {monthList.map(renderOption)}
          </DateSelect>
          <DateSelect
            value={creditCard.year}
            onChange={({ currentTarget }): void =>
              changeCardContent("year", currentTarget.value)
            }
          >
            {yearList.map(renderOption)}
          </DateSelect>
        </DateWrapper>
      </Fieldset>
      <Fieldset style={{ width: "30%" }}>
        <Legend>CW</Legend>
        <InputBox
          type="text"
          pattern="\d{3,4}"
          value={creditCard.cw}
          onChange={({ currentTarget }): void =>
            changeCardContent("cw", currentTarget.value)
          }
          onFocus={(): void => focusCW(true)}
          onBlur={(): void => focusCW(false)}
        />
      </Fieldset>
    </Form>
  );
};

export default CreditCardForm;
