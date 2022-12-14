import styled from "styled-components";
import useMovies from "../../../hooks/api/useMovies";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import LabelValue from "../label-value/LabelValue";

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 17px;
`;

const MovieDetailsModel = () => {
  const { detailedMovie } = useMovies();

  return (
    <>
      <LabelValue label="Year" value={detailedMovie?.year} marginBottom={17} />

      <LabelValue
        label="Genre"
        value={detailedMovie?.genre}
        marginBottom={17}
      />

      <LabelValue
        label="Description"
        value={detailedMovie?.description}
        marginBottom={17}
        lineHeight={24}
      />

      <FlexDiv>
        <LabelValue
          highlight
          label="Director"
          value={detailedMovie?.director}
          marginRight={48}
        />
        <LabelValue highlight label="Actors" value={detailedMovie?.actors} />
      </FlexDiv>

      <LabelValue
        label="Runtime"
        value={detailedMovie?.runtime}
        marginBottom={17}
      />

      <LabelValue
        label="Rating"
        value={detailedMovie?.rating}
        marginBottom={17}
      />

      <LabelValue
        label="Votes"
        value={detailedMovie?.votes}
        marginBottom={17}
      />

      <LabelValue
        label="Revenue"
        value={currencyFormatter(detailedMovie?.revenue ?? 0)}
        marginBottom={17}
      />

      <LabelValue label="Metascore" value={detailedMovie?.metascore} />
    </>
  );
};

export default MovieDetailsModel;
