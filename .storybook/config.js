import React from "react";
import prettyFormat from "pretty-format";
import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "react-storybook-addon-props-combinations";
import "@storybook/addon-console";
import { BaseStyles } from "../src";

addDecorator(storyFn => (
  <>
    <BaseStyles />
    {storyFn()}
  </>
));

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.(js|tsx?)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  CombinationRenderer: ({ Component, props }) => {
    const el = <Component {...props} />;
    return (
      <div
        style={{
          display: "inline-block",
          border: "1px solid #E9ECF0",
          borderRadius: "3px",
          margin: "16px",
          boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.08)"
        }}
      >
        <div
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {el}
        </div>
        <pre
          style={{
            padding: "24px",
            background: "#002b36",
            color: "#93a1a1",
            margin: 0,
            borderRadius: "0 0 3px 3px"
          }}
        >
          {prettyFormat(el, {
            plugins: [prettyFormat.plugins.ReactElement]
          })}
        </pre>
      </div>
    );
  }
});

configure(loadStories, module);
