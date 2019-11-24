import styled, { keyframes } from "styled-components";
import { Box } from "rebass";
import { theme } from "../theme";

const donutSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default styled(Box)`
  animation: ${donutSpin} 800ms linear infinite;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${theme.text.primary};
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;
