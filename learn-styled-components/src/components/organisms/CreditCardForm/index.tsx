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
  <option value={value}>{value}</option>
);

const CreditCardForm: React.FC<TProps> = ({
  creditCard,
  monthList,
  yearList,
  changeCardContent,
  focusCW
}: TProps): JSX.Element => {
  return (
    <article>
      <form>
        <td>Card Number</td>
        <dd>
          <input
            type="text"
            pattern="\d{14,16}"
            value={creditCard.number}
            onChange={({ currentTarget }): void =>
              changeCardContent("number", currentTarget.value)
            }
          />
        </dd>
        <span>Card Name</span>
        <dd>
          <input
            type="text"
            value={creditCard.name}
            onChange={({ currentTarget }): void =>
              changeCardContent("name", currentTarget.value)
            }
          />
        </dd>
        <span>Expiration Date</span>
        <dd>
          <select
            value={creditCard.month}
            onChange={({ currentTarget }): void =>
              changeCardContent("month", currentTarget.value)
            }
          >
            {monthList.map(renderOption)}
          </select>
          <span>/</span>
          <select
            value={creditCard.year}
            onChange={({ currentTarget }): void =>
              changeCardContent("year", currentTarget.value)
            }
          >
            {yearList.map(renderOption)}
          </select>
        </dd>
        <span>CW</span>
        <dd>
          <input
            type="text"
            pattern="\d{3,4}"
            value={creditCard.cw}
            onChange={({ currentTarget }): void =>
              changeCardContent("cw", currentTarget.value)
            }
            onFocus={(): void => focusCW(true)}
            onBlur={(): void => focusCW(false)}
          />
        </dd>
      </form>
    </article>
  );
};

export default CreditCardForm;
