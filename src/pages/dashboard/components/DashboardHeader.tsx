import { useCallback, useEffect, useState } from "react";
import Reset from "../../../components/icons/Reset";
import Button from "../../../components/ui/button/Button";
import { Title } from "../../../components/ui/title/Title.styles";
import YearPick from "../../../components/ui/year-pick/YearPick";
import useMovies from "../../../hooks/api/useMovies";
import useYearPick from "../../../hooks/custom/useYearPick";
import { FlexDiv } from "../Dashboard.styles";

export enum ActiveTop {
  TOP_10 = "TOP_10",
  TOP_10_PER_YEAR = "TOP_10_PER_YEAR",
}

const DashboardHeader = () => {
  const [activeTop, setActiveTop] = useState<ActiveTop>();
  const { listMovies } = useMovies();

  const {
    isShown: isShownPick,
    toggle: togglePick,
    selectedYear,
    setSelectedYear,
  } = useYearPick();

  const handleTop10 = useCallback(() => {
    setActiveTop(ActiveTop.TOP_10);
    listMovies({ rank: 10 });
  }, [listMovies, setActiveTop]);

  const handleTop10ByYear = useCallback(() => {
    togglePick();
  }, [togglePick]);

  const clearFilter = useCallback(() => {
    listMovies({ page: 0, size: 15 });
    setActiveTop(undefined);
  }, [listMovies]);

  useEffect(() => {
    if (selectedYear) {
      setActiveTop(ActiveTop.TOP_10_PER_YEAR);
      listMovies({ rank: 10, start: selectedYear, end: selectedYear });
    }
  }, [selectedYear, listMovies]);

  return (
    <>
      <Title>Movie ranking</Title>
      <FlexDiv>
        <Button
          marginRight={23}
          onClick={handleTop10}
          active={activeTop === ActiveTop.TOP_10}
        >
          Top 10 Revenue
        </Button>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            marginRight={23}
            onClick={handleTop10ByYear}
            active={activeTop === ActiveTop.TOP_10_PER_YEAR}
          >
            Top 10 Revenue per Year
          </Button>
          <YearPick
            isShown={isShownPick}
            hide={togglePick}
            onSelect={setSelectedYear}
          />
        </div>

        {activeTop && <Reset onClick={clearFilter} />}
      </FlexDiv>
    </>
  );
};

export default DashboardHeader;
