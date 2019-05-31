import React from "react";
import Tippy from "@tippy.js/react";

interface TooltipProps {
  content: string | React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  style?: object;
  children: React.ReactElement<any>;
}

export const Tooltip = (props: TooltipProps) => {
  const { style = {}, placement = "top", content, children, ...rest } = props;

  return (
    <Tippy
      touch={false}
      arrow={true}
      arrowType={"round"}
      hideOnClick={false}
      placement={placement}
      content={
        <span style={{ fontSize: "14px", fontWeight: 600, ...style }}>
          {content}
        </span>
      }
      // https://github.com/FezVrasta/popper.js/issues/535
      popperOptions={{
        modifiers: {
          preventOverflow: {
            boundariesElement: "window"
          }
        }
      }}
      {...rest}
    >
      <span>{children}</span>
    </Tippy>
  );
};
