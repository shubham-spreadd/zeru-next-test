import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary,
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.protoTypes = {
  primary: PropTypes.bool,
  size: PropTypes.string,
  backgroundColor: PropTypes.shape({}),
  label: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  size: "medium",
  backgroundColor: PropTypes.shape({}),
  label: PropTypes.bool,
};
