import { getMovie, getMovies } from "./client";
import { MovieParams } from "./movie";

export const doGetMovies: Function =
  (req: MovieParams) => async (dispatch: Function) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
    try {
      const payload = await getMovies(req);
      dispatch({ type: "GET_MOVIES_SUCCESS", payload });
      return payload;
    } catch (e: any) {
      dispatch({
        type: "GET_MOVIES_ERROR",
        error: e?.response?.data,
      });
    }
  };

export const doGetMovie: Function =
  (id: string) => async (dispatch: Function) => {
    dispatch({ type: "GET_MOVIE_REQUEST" });
    try {
      const payload = await getMovie(id);
      dispatch({ type: "GET_MOVIE_SUCCESS", payload });
      return payload;
    } catch (e: any) {
      dispatch({
        type: "GET_MOVIE_ERROR",
        error: e?.response?.data,
      });
    }
  };
