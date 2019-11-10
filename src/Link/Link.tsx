import styled from "styled-components";
import { Box } from "rebass";
import { theme } from "../theme";

export const Link = styled(Box).attrs(props => ({
  as: props.as || "a"
}))`
  color: currentColor;
  text-decoration: none;
  transition: color 100ms ease-out, box-shadow 100ms ease-out;
  /* Fake an underline with box-shadow so it's animate-able */
  box-shadow: 0px 1px 0px ${theme.brand.eight};

  &:hover {
    color: ${theme.brand.eight};
    box-shadow: 0px 2px 0px ${theme.brand.eight};
  }
`;
