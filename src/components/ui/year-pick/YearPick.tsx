import { useCallback, useMemo } from "react";
import { Backdrop, Title, Wrapper, Year } from "./YearPick.styles";

interface Props {
  onSelect?: (year: number) => void;
  numberOfYears?: number;
  isShown: boolean;
  hide: () => void;
}

const YearPick = ({ onSelect, hide, isShown, numberOfYears = 100 }: Props) => {
  const years = useMemo(() => {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - numberOfYears))
      .fill("")
      .map((v, idx) => now - idx) as Array<number>;
  }, [numberOfYears]);

  const handleSelect = useCallback(
    (year: number) => {
      if (onSelect) {
        onSelect(year);
        hide();
      }
    },
    [onSelect, hide]
  );

  return (
    <>
      {isShown && (
        <>
          <Backdrop onClick={hide} />
          <Wrapper>
            <Title>Select a year</Title>
            {years.map((y, i) => (
              <Year onClick={() => handleSelect(y)} key={i}>
                {y}
              </Year>
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default YearPick;
