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
  background: linear-gradient(to top, ${theme.darks.zero}, ${theme.darks.one});
  border: 1px solid ${theme.darks.zero};
  color: ${theme.lights.five};
  &:hover {
    ${styles.hover};
    color: ${theme.lights.six};
    background: linear-gradient(
      to top,
      ${theme.darks.zero},
      ${theme.darks.one}
    );
  }
  &:active {
    ${styles.active};
    background: linear-gradient(
      to top,
      ${theme.darks.zero},
      ${theme.darks.zero}
    );
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 1px ${theme.ui.wash}, 0 0 0 3px ${theme.lights.one};
  }
`;

export const TabButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};
