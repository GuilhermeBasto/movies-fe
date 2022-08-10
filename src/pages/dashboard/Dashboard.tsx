import { StyledLayout } from "../../components/ui/layout/Layout";
import Modal from "../../components/ui/modal/Modal";
import DetailsModal from "../../components/ui/movie-details-modal/MovieDetailsModal";
import MoviesTable from "../../components/ui/movies-table/MoviesTable";
import Top10Buttons from "../../components/ui/top-10-buttons/Top10Buttons";
import useMovies from "../../hooks/api/useMovies";
import useModal from "../../hooks/custom/useModal";
import { Title } from "./Dashboard.styles";

const Dashboard = () => {
  const { detailedMovie, isLoading } = useMovies();
  const { isShown, toggle } = useModal();

  return (
    <StyledLayout>
      <Title>Movie ranking</Title>
      <Top10Buttons />
      <MoviesTable onDetails={() => toggle()} />
      {!isLoading && (
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText={detailedMovie?.title}
          modalContent={<DetailsModal />}
        />
      )}
    </StyledLayout>
  );
};

export default Dashboard;
