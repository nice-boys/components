import React from "react";
import { storiesOf } from "@storybook/react";
import withPropsCombinations from "react-storybook-addon-props-combinations";
import Button from "./";

storiesOf("Button", module).add(
  "standard usage",
  withPropsCombinations(Button, {
    children: ["some text", "text and an emoji 👏"],
    disabled: [true, false]
  })
);
