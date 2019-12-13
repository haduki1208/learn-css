import React from "react";
import styled from "styled-components";
import CreditCardFormFieldset, { TSize } from "../CreditCardFormFieldset";

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

type TProps = {
  size?: TSize;
  title: string;
  pattern?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const CreditCardFormTextInput: React.FC<TProps> = ({
  size = "large",
  title,
  pattern,
  value,
  onChange,
  onFocus,
  onBlur
}: TProps): JSX.Element => (
  <CreditCardFormFieldset size={size} title={title}>
    <InputBox
      type="text"
      pattern={pattern}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </CreditCardFormFieldset>
);

export default React.memo(
  CreditCardFormTextInput,
  (prevProps, nextProps): boolean => prevProps.value === nextProps.value
);
