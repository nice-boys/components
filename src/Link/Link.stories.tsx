import React from "react";
import { storiesOf } from "@storybook/react";
import { Link } from "./Link";

storiesOf("Link", module).add("Default", () => (
  <p>
    All three of us have built <Link href="#">some companies</Link> before and
    noticed that product announcements had a lot of marketing value.
    Unfortunately, they are tedious to create, so we almost never did. We lost
    out on a lot of user excitement for changes we were shipping anyway.
  </p>
));
