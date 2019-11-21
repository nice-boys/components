import React from "react";
import { Flex, Box } from "rebass";
import { storiesOf } from "@storybook/react";
import { Nav } from "./Nav";
import { PrimaryButton } from "../Button";

const ChangefeedNav = () => (
  <div style={{ height: "200vh" }}>
    <Nav>
      <Box pr={3}>
        <strong>Some</strong>product
      </Box>
      <Nav.Content>
        <Flex flexDirection={["column", "row", "row"]}>
          <Nav.Item href="#">About</Nav.Item>
          <Nav.Item href="#">Our Story</Nav.Item>
          <Nav.Item href="#">Pricing</Nav.Item>
        </Flex>
        <Flex
          pt={[2, 0]}
          pb={[3, 0]}
          justifyContent={["center", ""]}
          width={[1, "auto"]}
        >
          <PrimaryButton>Get started</PrimaryButton>
        </Flex>
      </Nav.Content>
    </Nav>

    <h1>Navbar</h1>
  </div>
);

storiesOf("Nav", module)
  .add("Desktop", ChangefeedNav)
  .add("Mobile", ChangefeedNav, { viewport: { defaultViewport: "iphonex" } });
