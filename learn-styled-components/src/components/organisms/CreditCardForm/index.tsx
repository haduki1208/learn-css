import React from "react";
import styled from "styled-components";
import { TCreditCard } from "../CreditCard";
import CreditCardFormTextInput from "../../molecules/CreditCardFormTextInput";
import CreditCardFormDateSelect from "../../molecules/CreditCardFormDateSelect";

type TProps = {
  creditCard: TCreditCard;
  monthList: string[];
  yearList: string[];
  changeCardContent: (key: keyof TCreditCard, value: string) => void;
  focusCW: (isFocus: boolean) => void;
};

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

const CreditCardForm: React.FC<TProps> = ({
  creditCard,
  monthList,
  yearList,
  changeCardContent,
  focusCW
}: TProps): JSX.Element => {
  return (
    <Form>
      <CreditCardFormTextInput
        title="Card Number"
        pattern="\d{14,16}"
        value={creditCard.number}
        onChange={({ currentTarget }): void =>
          changeCardContent("number", currentTarget.value)
        }
      />
      <CreditCardFormTextInput
        title="Card Name"
        value={creditCard.name}
        onChange={({ currentTarget }): void =>
          changeCardContent("name", currentTarget.value)
        }
      />
      <CreditCardFormDateSelect
        size="medium"
        title="Expiration Date"
        month={creditCard.month}
        year={creditCard.year}
        monthList={monthList}
        yearList={yearList}
        onChangeMonth={({ currentTarget }): void =>
          changeCardContent("month", currentTarget.value)
        }
        onChangeYear={({ currentTarget }): void =>
          changeCardContent("year", currentTarget.value)
        }
      />
      <CreditCardFormTextInput
        size="small"
        title="CW"
        pattern="\d{3,4}"
        value={creditCard.cw}
        onChange={({ currentTarget }): void =>
          changeCardContent("cw", currentTarget.value)
        }
        onFocus={(): void => focusCW(true)}
        onBlur={(): void => focusCW(false)}
      />
    </Form>
  );
};

export default CreditCardForm;
