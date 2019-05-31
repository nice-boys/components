import React from "react";
import { storiesOf } from "@storybook/react";
import withPropsCombinations from "react-storybook-addon-props-combinations";
import { Tooltip } from "./Tooltip";
import { PrimaryButton } from "../Button";

storiesOf("Tooltip", module).add(
  "Default",
  withPropsCombinations(Tooltip, {
    children: [<PrimaryButton>Button</PrimaryButton>],
    placement: ["top", "bottom", "left", "right"],
    content: ["Tooltip text"]
  })
);
