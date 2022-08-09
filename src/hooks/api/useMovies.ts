import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { doGetMovie, doGetMovies } from "../../state/movies/actions";
import { MovieParams } from "../../state/movies/movie";

const useMovies = () => {
  const movies = useAppSelector((state) => state.movies.movies);
  const detailedMovie = useAppSelector((state) => state.movies.detailedMovie);
  const isLoading = useAppSelector((state) => state.movies.isLoading);
  const error = useAppSelector((state) => state.movies.error);

  const dispatch = useAppDispatch();

  const listMovies = useCallback(
    (params?: Partial<MovieParams>) => {
      return dispatch(doGetMovies(params));
    },
    [dispatch]
  );

  const getDetailedMovie = useCallback(
    (id: string) => {
      return dispatch(doGetMovie(id));
    },
    [dispatch]
  );

  return {
    isLoading,
    error,
    movies,
    detailedMovie,
    listMovies,
    getDetailedMovie,
  };
};

export default useMovies;
