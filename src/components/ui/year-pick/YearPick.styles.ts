import styled from "styled-components";
import { colors } from "../../../theme/colors";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  margin-left: 18%;
  background-color: ${colors.white};
  outline: 0;
  width: 178px;
  height: 478px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 12px 24px ${colors.black1};
  padding: 17px 0;
`;

export const Year = styled.p`
  font-size: 14px;
  color: ${colors.grey};
  cursor: pointer;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-size: 12px;
  color: ${colors.lightGrey};
  margin-bottom: 18px;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;
