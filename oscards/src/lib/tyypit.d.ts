export type Movie = {
	id: number;
	title: string;
	year: number;
	length: number; // minutes
	imdbRating: number;
	oscarWins: number;
	streaming: string[];
	imdbID: string;
};
export type Person = {
	id: number;
	name: string;
	born: number;
	nationality: string;
	oscarNominations: number;
	ocscarWins: number;
	totalMovies: string;
	image: string;
};
