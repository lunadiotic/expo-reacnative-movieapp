import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const placeholderImage = require('../assets/images/placeholder.png');

const propTypes = {
	item: PropTypes.object,
};

const MovieCard = (props) => {
	const { item } = props;
	return (
		<View>
			<TouchableOpacity style={styles.container}>
				<Image
					style={styles.image}
					source={
						item.poster_path
							? {
									uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
							  }
							: placeholderImage
					}
				/>
				{!item.poster_path && (
					<Text style={styles.movieTitle}>
						{item.title ? item.title : item.name}
					</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 5,
		position: 'relative',
		alignItems: 'center',
		// justifyContent: 'center',
		height: 200,
	},
	image: {
		height: 200,
		width: 120,
		borderRadius: 20,
	},
	movieTitle: {
		position: 'absolute',
		width: 100,
		top: 10,
		textAlign: 'center',
		// alignSelf: 'center',
	},
});

MovieCard.propTypes = propTypes;

export default memo(MovieCard);
