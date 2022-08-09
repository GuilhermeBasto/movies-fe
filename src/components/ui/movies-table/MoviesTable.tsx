import { useCallback, useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import useMovies from "../../../hooks/api/useMovies";
import { Movie } from "../../../state/movies/movie";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import Eye from "../../icons/Eye";
import Table from "../table/Table";
import { TableColumns } from "../table/types";

const Icon = styled.span`
  cursor: pointer;
`;

const defaultPaginator = { page: 0, size: 15 };

interface Props {
  onDetails: () => void;
}

const MoviesTable = ({ onDetails }: Props) => {
  const { movies, listMovies, getDetailedMovie } = useMovies();
  const [paginator, setPaginator] = useState(defaultPaginator);

  useEffect(() => {
    if (!movies?.content?.length) {
      listMovies(paginator);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPaginator({
      page: 0,
      size: movies?.numberOfElements ?? defaultPaginator.size,
    });
  }, [movies?.numberOfElements]);

  const handleNullValue = useCallback(
    (value: string | number) => (!!value ? value : "-"),
    []
  );

  const handleDetails = useCallback(
    (id: string) => {
      getDetailedMovie(id);
      onDetails();
    },
    [getDetailedMovie, onDetails]
  );

  const hasMoreData = useMemo(
    () => paginator.size !== movies?.totalElements,
    [paginator, movies?.totalElements]
  );

  const columns: TableColumns[] = [
    {
      title: "RANKING",
      render: (record: Movie) => <span>{handleNullValue(record.rank)}</span>,
    },
    {
      title: "TITLE",
      render: (record: Movie) => <span>{handleNullValue(record.title)}</span>,
    },
    {
      title: "YEAR",
      render: (record: Movie) => <span>{handleNullValue(record.year)}</span>,
    },
    {
      title: "REVENUE",
      render: (record: Movie) => (
        <span>{handleNullValue(currencyFormatter(record.revenue))}</span>
      ),
    },
    {
      title: "",
      render: (record: Movie) => (
        <Icon onClick={() => handleDetails(record.id)}>
          <Eye />
        </Icon>
      ),
    },
  ];

  const fetchMoreData = useCallback(async () => {
    if (hasMoreData) {
      await listMovies({ ...paginator, size: paginator.size + 15 });
    }
  }, [listMovies, paginator, hasMoreData]);

  return (
    <>
      <InfiniteScroll
        dataLength={paginator.size}
        next={fetchMoreData}
        hasMore={hasMoreData}
        loader={<></>}
      >
        <Table data={movies} columns={columns} />
      </InfiniteScroll>
    </>
  );
};

export default MoviesTable;
