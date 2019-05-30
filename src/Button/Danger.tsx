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
  background: linear-gradient(
    to top,
    ${theme.accent.error.seven},
    ${theme.accent.error.six}
  );
  border: 1px solid ${theme.accent.error.seven};
  color: ${theme.lights.six};
  &:hover {
    ${styles.hover};
    background: linear-gradient(
      to top,
      ${theme.accent.error.six},
      ${theme.accent.error.five}
    );
  }
  &:active {
    ${styles.active};
    background: linear-gradient(
      to top,
      ${theme.accent.error.five},
      ${theme.accent.error.six}
    );
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 1px ${theme.ui.wash},
      0 0 0 3px ${theme.accent.error.border};
  }
`;

export const DangerButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};
