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
  background: none;
  border: 1px solid ${theme.lights.three};
  color: ${theme.text.tertiary};
  box-shadow: none;
  &:hover {
    ${styles.hover};
    color: ${theme.text.primary};
    border: 1px solid ${theme.lights.two};
    background: none;
    box-shadow: none;
  }
  &:active {
    ${styles.active};
    border: 1px solid ${theme.lights.two};
    background: none;
  }
  &:focus {
    ${styles.focus};
    border: 1px solid ${theme.lights.two};
    box-shadow: 0 0 0 1px ${theme.ui.wash}, 0 0 0 3px ${theme.lights.three};
  }
`;

export const OutlineButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};
