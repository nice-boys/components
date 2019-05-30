import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import {
  styles,
  getPaddingFromSize,
  getFontSizeFromSize,
  ButtonProps
} from "./base";

const Button = styled.button<ButtonProps>`
  ${styles.base};
  background: linear-gradient(to top, ${theme.brand.seven}, ${theme.brand.six});
  border: 1px solid ${theme.brand.seven};
  color: ${theme.lights.six};
  &:hover {
    ${styles.hover};
    background: linear-gradient(
      to top,
      ${theme.brand.six},
      ${theme.brand.five}
    );
  }
  &:active {
    ${styles.active};
    background: linear-gradient(
      to top,
      ${theme.brand.five},
      ${theme.brand.six}
    );
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 1px ${theme.ui.wash}, 0 0 0 3px ${theme.brand.border};
  }
`;

const PrimaryButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};

export default PrimaryButton;
