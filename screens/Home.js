import React, { useEffect, useState } from 'react';
import {
	getPopularMovies,
	getPopularTv,
	getUpcomingMovies,
} from '../services/services';
import { SliderBox } from 'react-native-image-slider-box';
import {
	ActivityIndicator,
	Dimensions,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import MovieCarousel from '../components/MovieCarousel';
import ErrorMessage from '../components/ErrorMessage';

const dimensions = Dimensions.get('screen');

const Home = () => {
	const [popMovie, setPopMovie] = useState();
	const [popTV, setPopTV] = useState();
	const [movieImages, setMovieImages] = useState();
	const [err, setErr] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const getMovieData = () => {
		return Promise.all([
			getUpcomingMovies(),
			getPopularMovies(),
			getPopularTv(),
		]);
	};

	useEffect(() => {
		getMovieData()
			.then(([upcomingMovies, popularMovies, popularTv]) => {
				let images = [];
				for (let movie = 0; movie < upcomingMovies.length; movie++) {
					images.push(
						`https://image.tmdb.org/t/p/w500${upcomingMovies[movie]['poster_path']}`
					);
				}
				setMovieImages(images);
				setPopMovie(popularMovies);
				setPopTV(popularTv);
			})
			.catch((err) => {
				setErr(err);
			})
			.finally(() => {
				setLoaded(true);
			});
	}, []);

	return (
		<>
			{loaded && !err && (
				<ScrollView>
					{/* Slider */}
					{movieImages && (
						<View style={styles.container}>
							<SliderBox
								images={movieImages}
								autoplay={true}
								circleLoop={true}
								sliderBoxHeight={dimensions.height / 1.5}
								dotStyle={styles.sliderStyle}
							/>
						</View>
					)}

					{/* popular movie carousel */}
					{popMovie && (
						<View style={styles.container}>
							<MovieCarousel
								title='Popular Movies'
								content={popMovie}
							></MovieCarousel>
						</View>
					)}

					{/* popular tv carousel */}
					{popTV && (
						<View style={styles.container}>
							<MovieCarousel title='Popular TV' content={popTV}></MovieCarousel>
						</View>
					)}
				</ScrollView>
			)}

			{!loaded && (
				<ActivityIndicator
					size='large'
					style={{ opacity: 1 }}
					color='#999999'
				/>
			)}

			{err && <ErrorMessage />}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sliderStyle: {
		height: 0,
	},
});

export default Home;
