import { storiesOf } from "@storybook/react";
import withPropsCombinations from "react-storybook-addon-props-combinations";
import { action } from "@storybook/addon-actions";
import {
  PrimaryButton,
  DangerButton,
  GhostButton,
  JoinButton,
  OutlineButton,
  TabButton
} from "./";

storiesOf("Buttons", module)
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
    "Ghost",
    withPropsCombinations(GhostButton, {
      children: ["Potential click"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  )
  .add(
    "Outline",
    withPropsCombinations(OutlineButton, {
      children: ["Potential click"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  )
  .add(
    "Tab",
    withPropsCombinations(TabButton, {
      children: ["Potential click"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  )
  .add(
    "Join",
    withPropsCombinations(JoinButton, {
      children: ["Join"],
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
