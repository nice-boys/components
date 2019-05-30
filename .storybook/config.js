import { configure } from "@storybook/react";
import { setDefaults } from "react-storybook-addon-props-combinations";
import "@storybook/addon-console";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.(js|tsx?)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  style: {
    display: "inline-block",
    marginRight: "24px",
    marginBottom: "24px"
  }
});

configure(loadStories, module);
