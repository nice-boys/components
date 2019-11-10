import React from "react";
import { Wrapper } from "./components/Wrapper";
import { Navbar } from "./components/Navbar";
import { Item } from "./components/Item";
import { Content } from "./components/Content";

interface Props {
  children: React.ReactNode;
}

const Nav = (props: Props) => {
  return (
    <Wrapper mb={3}>
      <Navbar {...props}>{props.children}</Navbar>
    </Wrapper>
  );
};

Nav.Item = Item;
Nav.Content = Content;

export { Nav };
