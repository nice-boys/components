import React from "react";
import styled from "styled-components";
import { Flex, FlexProps } from "rebass";
import { defaultBreakpoints } from "styled-system";
import { ChevronDown } from "react-feather";
import { theme } from "../../theme";

const Mobile = styled(Flex)`
  display: none;
  @media screen and (max-width: ${defaultBreakpoints[0]}) {
    display: flex;
  }
`;

const Desktop = styled(Flex)`
  @media screen and (max-width: ${defaultBreakpoints[0]}) {
    display: none;
  }
`;

const MobileExpandedWrapper = styled(Flex)`
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100vh;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
`;

const MobileExpandedCard = styled(Flex)`
  position: absolute;
  background: white;
  top: 0;
`;

const UnstyledButton = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  outline: none;
`;

export const Content = (props: FlexProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Desktop
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width={1}
        {...props}
      />
      <Mobile
        flexDirection="row"
        justifyContent="flex-end"
        alignitems="center"
        width={1}
      >
        <UnstyledButton onClick={() => setIsOpen(!isOpen)}>
          <ChevronDown
            style={{
              transform: `rotate(${isOpen ? `180deg` : `0deg`})`,
              transition: `transform 100ms ease-in-out`
            }}
            color={theme.darks.six}
          />
        </UnstyledButton>
        {isOpen && (
          <MobileExpandedWrapper onClick={() => setIsOpen(false)}>
            <MobileExpandedCard flexDirection="column" width={1}>
              {props.children}
            </MobileExpandedCard>
          </MobileExpandedWrapper>
        )}
      </Mobile>
    </>
  );
};
