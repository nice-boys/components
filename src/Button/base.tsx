import React, { ButtonHTMLAttributes } from "react";
import { css } from "styled-components";
import {
  space,
  width,
  style,
  getPx,
  SpaceProps,
  WidthProps,
  FontSizeProps
} from "styled-system";
import { theme } from "../theme";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpaceProps,
    WidthProps,
    FontSizeProps {
  // href?: string;
  children: React.ReactNode;
  size?: "large" | "small";
}

export interface PaddingType {
  py: number;
  px: number;
}

export const getPaddingFromSize = (size: ButtonProps["size"]): PaddingType => {
  const defaults = { py: 2, px: 3 };

  switch (size) {
    case "small":
      return { py: 1, px: 2 };
    case "large":
      return { py: 3, px: 5 };
    default:
      return defaults;
  }
};

export const getFontSizeFromSize = (size: ButtonProps["size"]): number => {
  switch (size) {
    case "small":
      return 0;
    case "large":
      return 2;
    default:
      return 1;
  }
};

const fontSize = style({
  // React prop name
  prop: "fontSize",
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: "fontSize",
  // key for theme values
  key: "fontSizes",
  // accessor function for transforming the value
  transformValue: getPx,
  // add a fallback scale object or array, if theme is not present
  scale: [13, 15, 17, 20, 24]
});

const focus = css`
  box-shadow: 0 0 0 1px ${theme.lights.six}, 0 0 0 3px ${theme.ui.border};
  outline: none;
`;

const active = css`
  border: 1px solid transparent;
`;

const hover = css<ButtonProps>`
  box-shadow: ${props => (props.disabled ? "none" : theme.shadow.medium)};
  transition: all ${theme.animation.in};
`;

const base = css<ButtonProps>`
  ${space};
  ${width};
  ${fontSize};
  -webkit-appearance: none;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  line-height: 1;
  position: relative;
  text-align: center;
  background: linear-gradient(
    to top,
    ${theme.lights.five},
    ${theme.lights.six}
  );
  border: 1px solid transparent;
  box-shadow: ${props => (props.disabled ? "none" : theme.shadow.small)};
  border-radius: 4px;
  transition: all ${theme.animation.out};
  opacity: ${props => (props.disabled ? "0.64" : "1")};
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  &:hover {
    ${hover};
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:active {
    ${active}
  }
  &:focus {
    ${focus};
  }
`;

export const styles = {
  base,
  focus,
  active,
  hover
};
