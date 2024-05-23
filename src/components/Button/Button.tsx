import { ComponentProps } from "react";
import { StyledButton } from "./Button.style";

const Button = ({ children, ...props }: ComponentProps<"button">) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
