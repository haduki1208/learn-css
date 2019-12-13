import React from "react";
import styled from "styled-components";
import CreditCardFormFieldset, { TSize } from "../CreditCardFormFieldset";

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

const renderOption = (value: string): JSX.Element => (
  <option key={value} value={value}>
    {value}
  </option>
);

type TProps = {
  size?: TSize;
  title: string;
  month: string;
  year: string;
  monthList: string[];
  yearList: string[];
  onChangeMonth: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeYear: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CreditCardFormDateSelect: React.FC<TProps> = ({
  size = "large",
  title,
  month,
  year,
  monthList,
  yearList,
  onChangeMonth,
  onChangeYear
}: TProps): JSX.Element => (
  <CreditCardFormFieldset size={size} title={title}>
    <DateWrapper>
      <DateSelect value={month} onChange={onChangeMonth}>
        {monthList.map(renderOption)}
      </DateSelect>
      <DateSelect value={year} onChange={onChangeYear}>
        {yearList.map(renderOption)}
      </DateSelect>
    </DateWrapper>
  </CreditCardFormFieldset>
);

export default React.memo(
  CreditCardFormDateSelect,
  (prevProps, nextProps): boolean =>
    prevProps.month === nextProps.month && prevProps.year === nextProps.year
);
