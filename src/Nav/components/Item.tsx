import React from "react";
import styled from "styled-components";
import { Box, LinkProps, Flex } from "rebass";
import { theme } from "../../theme";
import { defaultBreakpoints } from "styled-system";
import { ChevronRight } from "react-feather";

const Mobile = styled(Box)`
  display: none;
  @media screen and (max-width: ${defaultBreakpoints[0]}) {
    display: flex;
  }
`;

const Link = styled(Flex).attrs(props => ({
  as: props.as || "a"
}))`
  color: ${theme.darks.zero};
  text-decoration: none;
  background-color: transparent;
  transition: background 100ms ease-out;
  padding: 8px 16px;
  border-radius: 4px;
  line-height: normal;
  cursor: pointer;

  :hover {
    background-color: ${theme.lights.four};
  }

  :active,
  :focus {
    color: ${theme.darks.zero};
  }

  @media screen and (max-width: ${defaultBreakpoints[0]}) {
    border-bottom: 1px solid ${theme.ui.border};
    padding: 16px 0;
    margin: 0px 16px;

    svg {
      transition: transform 100ms ease-in-out;
    }

    &:hover {
      background-color: transparent;
    }

    &:hover svg {
      transform: translateX(2px);
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

export const Item = (props: LinkProps) => {
  return (
    // @ts-ignore
    <Link
      justifyContent={["space-between", "initial"]}
      alignItems="center"
      {...props}
      ref={undefined}
    >
      {props.children}
      <Mobile style={{ height: "1em" }}>
        <ChevronRight size="1.5em" color={theme.darks.six} />
      </Mobile>
    </Link>
  );
};
