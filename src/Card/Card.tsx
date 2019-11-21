import React from "react";
import styled from "styled-components";
import { Flex, Heading, HeadingProps } from "rebass";
import { theme } from "../theme";

const Card = styled(Flex).attrs(props => ({
  p: props.p || 3,
  flexDirection: props.flexDirection || "column"
}))`
  border-radius: 4px;
  background-color: ${theme.ui.cardWash};
  box-shadow: ${theme.shadow.large};
`;

const CardTitle = (props: HeadingProps) => (
  <Heading as={"h1"} fontSize={3} {...props} />
);

export { Card, CardTitle };
