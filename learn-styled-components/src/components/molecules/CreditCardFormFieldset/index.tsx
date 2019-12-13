import React from "react";
import styled from "styled-components";

export type TSize = "large" | "medium" | "small";

const Fieldset = styled.fieldset<{ size: TSize }>`
  appearance: none;
  margin: 0 auto;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }): string => {
    if (size === "large") return "100%";
    if (size === "medium") return "70%";
    return "30%";
  }};
`;

const Legend = styled.legend`
  font-size: 0.8rem;
`;

type TProps = {
  children: React.ReactNode;
  size?: TSize;
  title: string;
};

const CreditCardFormFieldset: React.FC<TProps> = ({
  children,
  size = "large",
  title
}: TProps): JSX.Element => (
  <Fieldset size={size}>
    <Legend>{title}</Legend>
    {children}
  </Fieldset>
);

export default CreditCardFormFieldset;
