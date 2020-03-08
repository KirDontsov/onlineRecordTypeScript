import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { IProfile } from "../@types/Interfaces";

const { Value } = Animated;

type CardProps = {
	profile: IProfile;
	likeOpacity?: Value | number;
	nopeOpacity?: Value | number;
};

export default class Card extends React.PureComponent<CardProps> {
	static defaultProps = {
		likeOpacity: 0,
		nopeOpacity: 0
	};

	render() {
		const { profile, likeOpacity, nopeOpacity } = this.props;
		return (
			<View style={StyleSheet.absoluteFill}>
				{profile !== undefined ? <Image style={styles.image} source={profile.profile} /> : null}
				<View style={styles.overlay}>
					<View style={styles.header}>
						<Animated.View style={[styles.like, { opacity: likeOpacity }]}>
							<Text style={styles.likeLabel}>Выбрать</Text>
						</Animated.View>
						<Animated.View style={[styles.nope, { opacity: nopeOpacity }]}>
							<Text style={styles.nopeLabel}>Следующий</Text>
						</Animated.View>
					</View>
					<View style={styles.footer}>{profile !== undefined ? <Text style={styles.name}>{profile.name}</Text> : null}</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		...StyleSheet.absoluteFillObject,
		width: null,
		height: null,
		borderRadius: 8
	},
	overlay: {
		flex: 1,
		justifyContent: "space-between",
		padding: 16
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	footer: {
		flexDirection: "row"
	},
	name: {
		color: "white",
		fontSize: 32
	},
	like: {
		borderWidth: 4,
		borderRadius: 5,
		padding: 8,
		borderColor: "#6ee3b4"
	},
	likeLabel: {
		fontSize: 32,
		color: "#6ee3b4",
		fontWeight: "bold"
	},
	nope: {
		borderWidth: 4,
		borderRadius: 5,
		padding: 8,
		borderColor: "#ec5288"
	},
	nopeLabel: {
		fontSize: 32,
		color: "#ec5288",
		fontWeight: "bold"
	}
});
