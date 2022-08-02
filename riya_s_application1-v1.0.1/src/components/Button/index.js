import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder10: "rounded-radius10",
  icbCircleBorder15: "rounded-radius15",
  RoundedBorder5: "rounded-radius5",
};
const variants = {
  icbFillBlue40063: "bg-blue_400_63",
  icbFillLightblueA20019: "bg-light_blue_A200_19",
  icbFillBluegray800: "bg-bluegray_800",
  OutlineBlack9003f: "bg-blue_400 shadow-bs text-white_A700",
};
const sizes = {
  smIcn: "p-[2px]",
  mdIcn: "lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
  sm: "p-[4px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbRoundedBorder10",
    "icbCircleBorder15",
    "RoundedBorder5",
  ]),
  variant: PropTypes.oneOf([
    "icbFillBlue40063",
    "icbFillLightblueA20019",
    "icbFillBluegray800",
    "OutlineBlack9003f",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "sm"]),
};
Button.defaultProps = {
  className: "",
  leftIcon: null,
  rightIcon: null,
  shape: "icbCircleBorder15",
  variant: "icbFillBlue40063",
  size: "smIcn",
};

export { Button };
