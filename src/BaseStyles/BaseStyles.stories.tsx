import React from "react";
import { storiesOf } from "@storybook/react";
import { BaseStyles } from "./";

storiesOf("BaseStyles", module).add("Global", () => (
  <>
    <BaseStyles />
    This component sets the base styles, including normalize.css (see the grey
    background and no margin of the whole page)
  </>
));
