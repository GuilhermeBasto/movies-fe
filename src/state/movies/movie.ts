export interface Movie {
  id: string;
  rank: number;
  title: string;
  year: number;
  revenue: number;
}

export interface MovieParams {
  page?: number;
  size?: number;
  start?: number;
  end?: number;
  rank?: number;
  actor?: string;
}

export interface DetailedMovie {
  id: string;
  title: string;
  year: number;
  rank: number;
  revenue: number;
  genre: string;
  description: string;
  director: string;
  actors: string;
  runtime: number;
  rating: number;
  votes: number;
  metascore: number;
}
