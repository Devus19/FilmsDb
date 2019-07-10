export interface Film {
  genres: string[];
  _id: string;
  imdbId: string;
  title: string;
  director: string;
  year: number;
  metascore: number;
  actors: {
    imdbId: string;
    name: string;
  }[];
  posterUrl: string;
  __v: number;
}

export interface Films {
  [keys: number]: Film;
}

export interface FilmResponse {
  collection: Film[];
  total: number;
}

export interface Actor {
  _id: string;
  imdbId: string;
  name: string;
  birthday: string;
  country: string;
  gender: string;
  photoUrl: string;
  __v: number;
}

export interface ActorsResponse {
  collection: Actor[];
  total: number;
}

export interface FilmPopulated {
  genres: string[];
  _id: string;
  imdbId: string;
  title: string;
  director: string;
  year: number;
  metascore: number;
  actors: Actor[];
  posterUrl: string;
  __v: number;
}
