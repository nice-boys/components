import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import {
  styles,
  getPaddingFromSize,
  getFontSizeFromSize,
  ButtonProps
} from "./base";

const Button = styled.button`
  ${styles.base};
  background: linear-gradient(
    to top,
    ${theme.accent.success.seven},
    ${theme.accent.success.six}
  );
  border: 1px solid ${theme.accent.success.seven};
  color: ${theme.lights.six};
  &:hover {
    ${styles.hover};
    background: linear-gradient(
      to top,
      ${theme.accent.success.six},
      ${theme.accent.success.five}
    );
  }
  &:active {
    ${styles.active};
    background: linear-gradient(
      to top,
      ${theme.accent.success.five},
      ${theme.accent.success.six}
    );
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 1px ${theme.ui.wash},
      0 0 0 3px ${theme.accent.success.border};
  }
`;

export const JoinButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};
