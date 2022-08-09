import axiosClient from "../../config/axios";
import { ListResponse } from "../base-responses";
import { DetailedMovie, Movie, MovieParams } from "./movie";

export const getMovies = (params: MovieParams): Promise<ListResponse<Movie>> =>
  axiosClient
    .get<ListResponse<Movie>>(`/movies`, { params })
    .then((response) => response.data);

export const getMovie = (id: string): Promise<DetailedMovie> =>
  axiosClient
    .get<DetailedMovie>(`/movies/${id}`)
    .then((response) => response.data);
