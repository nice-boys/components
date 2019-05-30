import { storiesOf } from "@storybook/react";
import withPropsCombinations from "react-storybook-addon-props-combinations";
import { action } from "@storybook/addon-actions";
import { PrimaryButton, DangerButton } from "./";

storiesOf("Button", module)
  .add(
    "Primary",
    withPropsCombinations(PrimaryButton, {
      children: ["Click me"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  )
  .add(
    "Danger",
    withPropsCombinations(DangerButton, {
      children: ["Careful"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  );
