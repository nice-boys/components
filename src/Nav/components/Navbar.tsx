import styled from "styled-components";
import { Flex } from "rebass";
import { theme } from "../../theme";

export const Navbar = styled(Flex).attrs({
  flexDirection: "row",
  alignItems: "center",
  p: 3
})({
  backgroundColor: "white",
  boxShadow: theme.shadow.large,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 99
});
