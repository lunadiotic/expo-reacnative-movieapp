import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const propTypes = {
	errTextA: PropTypes.string,
	errTextB: PropTypes.string,
};

const defaultProps = {
	errTextA: 'Oops... Something went Error.',
	errTextB: 'Make sure you are online and restart the Application.',
};

const ErrorMessage = (props) => {
	const { errTextA, errTextB } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{errTextA}</Text>
			<Text style={styles.text}>{errTextB}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontWeight: 'bold',
	},
});

ErrorMessage.propTypes = propTypes;
ErrorMessage.defaultProps = defaultProps;

export default memo(ErrorMessage);
