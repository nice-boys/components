import React from "react";
import { storiesOf } from "@storybook/react";
import { Card, CardTitle } from "./";
import { Flex } from "rebass";

storiesOf("Card", module).add("Default", () => (
  <Flex justifyContent="center" m={4}>
    <Card width={0.5}>
      <CardTitle>This is a card!</CardTitle>
    </Card>
  </Flex>
));
