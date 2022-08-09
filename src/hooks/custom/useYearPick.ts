import { useCallback, useState } from "react";

const useYearPick = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<number>();

  const toggle = useCallback(() => {
    setIsShown(!isShown);
  }, [setIsShown, isShown]);

  return {
    isShown,
    selectedYear,
    setSelectedYear,
    toggle,
  };
};

export default useYearPick;
