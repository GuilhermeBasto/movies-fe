import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  marginRight?: string | number;
  children?: ReactNode;
  active?: boolean;
}
const Button = ({ children, ...remainingProps }: ButtonProps) => (
  <StyledButton {...remainingProps}>{children}</StyledButton>
);
export default Button;
