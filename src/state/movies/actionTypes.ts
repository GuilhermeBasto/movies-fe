import { Action } from "redux";
import { ListResponse } from "../base-responses";
import { DetailedMovie, Movie } from "./movie";

export interface GET_MOVIES_REQUEST extends Action {
  type: "GET_MOVIES_REQUEST";
}

export interface GET_MOVIES_SUCCESS extends Action {
  type: "GET_MOVIES_SUCCESS";
  payload: ListResponse<Movie>;
}

export interface GET_MOVIES_ERROR extends Action {
  type: "GET_MOVIES_ERROR";
  error: any; //FIXME: add error response from api
}

export interface GET_MOVIE_REQUEST extends Action {
  type: "GET_MOVIE_REQUEST";
}

export interface GET_MOVIE_SUCCESS extends Action {
  type: "GET_MOVIE_SUCCESS";
  payload: DetailedMovie;
}

export interface GET_MOVIE_ERROR extends Action {
  type: "GET_MOVIE_ERROR";
  error: any; //FIXME: add error response from api
}

export type Actions =
  | GET_MOVIES_REQUEST
  | GET_MOVIES_SUCCESS
  | GET_MOVIES_ERROR
  | GET_MOVIE_REQUEST
  | GET_MOVIE_SUCCESS
  | GET_MOVIE_ERROR;
