import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { weight } from "../../../theme/weight";

interface Props {
  label: string;
  value?: string | number;
  marginBottom?: string | number;
  marginRight?: string | number;
  highlight?: boolean;
  lineHeight?: number | string;
}

export const Label = styled.p`
  font-size: 14px;
  font-weight: ${weight.regular};
  color: ${colors.lightGrey};
  line-height: 17px;
  letter-spacing: 0;
`;

export const Value = styled.p<{
  highlight?: boolean;
  lineHeight?: string | number;
}>`
  font-size: 16px;
  font-weight: ${weight.medium};
  color: ${({ highlight }) => (highlight ? colors.lightBlue : colors.grey1)};
  letter-spacing: 0;
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : "19px")};
`;

export const Wrapper = styled.div<{
  marginBottom?: string | number;
  marginRight?: string | number;
}>`
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : 0};
  margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : 0)};
`;

export const LabelValue = ({
  label,
  value,
  highlight,
  lineHeight,
  ...remainingProps
}: Props) => {
  return (
    <Wrapper {...remainingProps}>
      <Label> {label}</Label>
      <Value highlight={highlight} lineHeight={lineHeight}>
        {value ?? "-"}
      </Value>
    </Wrapper>
  );
};

export default LabelValue;
