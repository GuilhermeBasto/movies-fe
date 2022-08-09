import { StyledLayout } from "../../components/ui/layout/Layout";
import Modal from "../../components/ui/modal/Modal";
import useMovies from "../../hooks/api/useMovies";
import useModal from "../../hooks/custom/useModal";
import DashboardHeader from "./components/DashboardHeader";
import DetailsModal from "./components/DetailsModal";
import MoviesTable from "./components/MoviesTable";

const Dashboard = () => {
  const { detailedMovie } = useMovies();
  const { isShown, toggle } = useModal();

  return (
    <StyledLayout>
      <DashboardHeader />
      <MoviesTable onDetails={() => toggle()} />
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText={detailedMovie?.title}
        modalContent={<DetailsModal />}
      />
    </StyledLayout>
  );
};

export default Dashboard;
