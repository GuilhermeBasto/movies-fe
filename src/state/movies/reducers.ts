import { Reducer } from "redux";
import { ListResponse } from "../base-responses";
import { Actions } from "./actionTypes";
import { DetailedMovie, Movie } from "./movie";

export interface MoviesState {
  movies: ListResponse<Movie> | undefined;
  detailedMovie: DetailedMovie | undefined;
  error?: any;
  isLoading: boolean;
}

export const moviesInitialState: MoviesState = {
  isLoading: false,
  movies: undefined,
  detailedMovie: undefined,
};

const movies: Reducer<MoviesState, Actions> = (
  state: MoviesState = moviesInitialState,
  action
): MoviesState => {
  switch (action.type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: undefined,
        movies: action.payload,
      };
    case "GET_MOVIES_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: undefined,
        detailedMovie: action.payload,
      };
    case "GET_MOVIE_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default: {
      return state;
    }
  }
};

export default movies;
