import React from "react";
import { Flex, FlexProps } from "rebass";
import Donut from "./Donut";

export default React.forwardRef((props: FlexProps, ref) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={{ height: "100%" }}
    ref={ref}
    {...props}
  >
    <Donut />
  </Flex>
));
