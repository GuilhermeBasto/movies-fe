import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { weight } from "../../../theme/weight";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  padding: 17px 58px;
  width: 748px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

export const HeaderText = styled.div`
  color: ${colors.darkBlue1};
  font-size: 32px;
  font-weight: ${weight.light};
`;

export const CloseButton = styled.div`
  display: flex;
  flex-direction: column;
  align-content: start;
  :hover {
    cursor: pointer;
  }
`;

export const CloseButtonText = styled.small`
  margin-left: 2px;
  font-size: 8px;
  color: ${colors.lightGrey1};
`;

export const Content = styled.div`
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`;
