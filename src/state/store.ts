import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import movies, { moviesInitialState } from "./movies/reducers";

const configureReduxStore = () => {
  return configureStore({
    reducer: {
      movies: movies,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState: {
      movies: moviesInitialState,
    },
  });
};

export const store = configureReduxStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
