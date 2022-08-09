import styled from "styled-components";
import { colors } from "../../../theme/colors";

export const StyledHeader = styled.nav`
  z-index: 50;
  height: 50px;
  top: 0px;
  position: sticky;
  background: ${colors.darkBlue};
`;

const Header = () => {
  return <StyledHeader />;
};

export default Header;
