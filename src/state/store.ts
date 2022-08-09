import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "../config/logger";
import movies, { moviesInitialState, MoviesState } from "./movies/reducers";

interface ApplicationState {
  movies: MoviesState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  movies,
});

// TODO: Replace this deprecated method
const configureStore = () => {
  const middlewareEnhancer = applyMiddleware(...[logger, thunkMiddleware]);
  const initialState: ApplicationState = {
    movies: moviesInitialState,
  };
  return createStore(reducers, initialState, middlewareEnhancer);
};

export const store = configureStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
