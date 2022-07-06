import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MovieCard from './MovieCard';

const propTypes = {
	title: PropTypes.string,
	content: PropTypes.array,
};

const MovieCarousel = (props) => {
	const { title, content } = props;
	return (
		<View style={styles.list}>
			<View>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.container}>
				<FlatList
					data={content}
					horizontal={true}
					renderItem={({ item }) => <MovieCard item={item} />}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingBottom: 20,
	},
	list: {
		marginTop: 15,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

MovieCarousel.propTypes = propTypes;

export default memo(MovieCarousel);
