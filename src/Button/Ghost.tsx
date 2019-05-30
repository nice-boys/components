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
    ${theme.lights.five},
    ${theme.lights.six}
  );
  color: ${theme.text.tertiary};
  border: 1px solid ${theme.lights.three};
  &:hover {
    ${styles.hover};
    background: linear-gradient(
      to top,
      ${theme.lights.five},
      ${theme.lights.six}
    );
    color: ${theme.text.primary};
    border: 1px solid ${theme.lights.three};
  }
  &:active {
    ${styles.active};
    background: linear-gradient(
      to top,
      ${theme.lights.six},
      ${theme.lights.five}
    );
    border: 1px solid ${theme.lights.three};
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 1px ${theme.lights.six}, 0 0 0 3px ${theme.lights.three};
    border: 1px solid ${theme.lights.four};
  }
`;

export const GhostButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};
