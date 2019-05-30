import { storiesOf } from "@storybook/react";
import withPropsCombinations from "react-storybook-addon-props-combinations";
import { action } from "@storybook/addon-actions";
import PrimaryButton from "./Primary";

storiesOf("Button", module).add(
  "Primary",
  withPropsCombinations(PrimaryButton, {
    children: ["Click me"],
    disabled: [true, false],
    onClick: [action("click")],
    size: ["small", "large", undefined]
  })
);
