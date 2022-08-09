import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { weight } from "../../../theme/weight";

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const HeaderTR = styled.tr`
  border-bottom: 1px solid ${colors.greenBlue};
`;

export const TR = styled.tr`
  border-bottom: 1px solid ${colors.lightGrey};
`;

export const HeaderTH = styled.th`
  font-weight: ${weight.bold};
  font-size: 10px;
  text-align: left;
  letter-spacing: 0;
  color: ${colors.greenBlue};
  margin: 0;
  padding: 0;
  line-height: 20px;
`;

export const BodyTD = styled.td`
  font-size: 16px;
  text-align: left;
  line-height: 20px;
  letter-spacing: 0;
  color: ${colors.grey};
  margin: 0;
  padding: 12px 0;
  align-items: center;
`;
