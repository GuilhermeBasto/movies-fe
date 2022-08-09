import styled from "styled-components";
import { colors } from "../../../theme/colors";

export const StyledButton = styled.button<{
  marginRight?: string | number;
  active?: boolean;
}>`
  height: 30px;
  background: ${({ active }) => (active ? colors.lightBlue : colors.white)};
  border: 1px solid ${colors.lightGrey};
  border-radius: 20px;
  opacity: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: max-content;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: ${({ active }) => (!active ? colors.lightGrey : colors.black)};
  margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : 0)};
  &:hover,
  &:active {
    background: ${colors.lightBlue};
    color: ${colors.black};
  }
`;
