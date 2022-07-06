import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { getPopularMovies, getUpcomingMovies } from '../services/services';
import { SliderBox } from 'react-native-image-slider-box';

const Home = () => {
	const [movie, setMovie] = useState('');
	const [movieImages, setMovieImages] = useState([]);
	const [err, setErr] = useState(false);

	useEffect(() => {
		getUpcomingMovies()
			.then((movies) => {
				let images = [];
				for (let movie = 0; movie < movies.length; movie++) {
					images.push(
						`https://image.tmdb.org/t/p/w500${movies[movie]['poster_path']}`
					);
				}
				setMovieImages(images);
			})
			.catch((err) => {
				setErr(err);
			});

		getPopularMovies()
			.then((movies) => {
				setMovie(movies[0]);
			})
			.catch((err) => {
				setErr(err);
			});
	}, []);
	return (
		<>
			<SliderBox images={movieImages} />
			<Text>Title: {movie.original_title}</Text>
			<Text>Release Date: {movie.release_date}</Text>
			{err && <Text style={{ color: 'red' }}>Internal Server Error</Text>}
		</>
	);
};

export default Home;
