export interface IGenre {
    _id: string;
    name: string;
    image: string;
}

export interface IGenreCardProps {
    genre: IGenre;
}

export interface IGenreMovies {
    _id: string;
    title: string;
    image: string;
    numberInStock: number;
    dailyRentalRate: number;
}

export interface IGenreMoviesParams {
    _id: string;
    name: string;
    movies: [];
}

export interface IGenreParams {
    [key: string]: string | undefined;
    genreId?: string | undefined;
}