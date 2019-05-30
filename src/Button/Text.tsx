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
  color: ${theme.brand.six};
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  &:hover {
    ${styles.hover};
    color: ${theme.brand.nine};
    background: none;
    box-shadow: none;
  }
  &:active {
    ${styles.active};
    background: none;
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 1px ${theme.ui.wash}, 0 0 0 3px ${theme.lights.three};
  }
`;

export const TextButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};
