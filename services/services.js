import axios from 'axios';

const apiURL = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=778306490922af732ee8ce5aeb1ef02e';

// Get Popular Movies
export const getPopularMovies = async () => {
	const response = await axios.get(`${apiURL}/movie/popular?${apiKey}`);
	return response.data.results;
};

// Get Popular Movies
export const getUpcomingMovies = async () => {
	const response = await axios.get(`${apiURL}/movie/upcoming?${apiKey}`);
	return response.data.results;
};

// Get Popular TV
export const getPopularTv = async () => {
	const response = await axios.get(`${apiURL}/tv/popular?${apiKey}`);
	return response.data.results;
};
