import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { IProfile } from "../@types/Interfaces";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather as Icon } from "@expo/vector-icons";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Card from "./Card";
import LightStatusBar from "./ui/StatusBar";

function runSpring(clock: Animated.Clock, value: any, dest: number | Animated.Node<number>) {
	const state = {
		finished: new Value(0),
		velocity: new Value(0),
		position: new Value(0),
		time: new Value(0)
	};

	const config = {
		damping: 20,
		mass: 1,
		stiffness: 100,
		overshootClamping: false,
		restSpeedThreshold: 1,
		restDisplacementThreshold: 0.5,
		toValue: new Value(0)
	};

	return [
		cond(clockRunning(clock), 0, [
			set(state.finished, 0),
			set(state.velocity, 0),
			set(state.position, value),
			set(config.toValue, dest),
			startClock(clock)
		]),
		spring(clock, state, config),
		cond(state.finished, stopClock(clock)),
		state.position
	];
}

const { width, height } = Dimensions.get("window");
const toRadians = (angle: number) => angle * (Math.PI / 180);
const rotatedWidth = width * Math.sin(toRadians(90 - 15)) + height * Math.sin(toRadians(15));
const {
	add,
	multiply,
	neq,
	spring,
	cond,
	eq,
	event,
	lessThan,
	greaterThan,
	and,
	call,
	set,
	clockRunning,
	startClock,
	stopClock,
	Clock,
	Value,
	concat,
	interpolate,
	Extrapolate
} = Animated;

export interface IProfilesProps {
	profiles: IProfile[];
	navigation: any;
}
export interface IProfilesState {
	profiles: IProfile[];
}

class Profiles extends Component<IProfilesProps, IProfilesState> {
	translationX: Animated.Value<0>;
	translationY: Animated.Value<0>;
	velocityX: Animated.Value<0>;
	offsetY: Animated.Value<0>;
	offsetX: Animated.Value<0>;
	gestureState: Animated.Value<any>;
	onGestureEvent: (...args: any[]) => void;
	translateY: Animated.Node<any>;
	translateX: Animated.Node<any>;
	constructor(props: IProfilesProps) {
		super(props);
		const { profiles } = props;
		this.state = { profiles };
		this.translationX = new Value(0);
		this.translationY = new Value(0);
		this.velocityX = new Value(0);
		this.offsetY = new Value(0);
		this.offsetX = new Value(0);
		this.gestureState = new Value(State.UNDETERMINED);
		this.onGestureEvent = event(
			[
				{
					nativeEvent: {
						translationX: this.translationX,
						translationY: this.translationY,
						velocityX: this.velocityX,
						state: this.gestureState
					}
				}
			],
			{ useNativeDriver: true }
		);
		this.init();
	}

	init = () => {
		const clockX = new Clock();
		const clockY = new Clock();
		const { translationX, translationY, velocityX, gestureState, offsetY, offsetX } = this;
		gestureState.setValue(State.UNDETERMINED);
		translationX.setValue(0);
		translationY.setValue(0);
		velocityX.setValue(0);
		offsetY.setValue(0);
		offsetX.setValue(0);

		const finalTranslateX = add(translationX, multiply(0.2, velocityX));
		const translationThreshold = width / 4;
		const snapPoint = cond(
			lessThan(finalTranslateX, -translationThreshold),
			-rotatedWidth,
			cond(greaterThan(finalTranslateX, translationThreshold), rotatedWidth, 0)
		);
		// TODO: handle case where the user drags the card again before the spring animation finished
		this.translateY = cond(
			eq(gestureState, State.END),
			[set(translationY, runSpring(clockY, translationY, 0)), set(offsetY, translationY), translationY],
			cond(eq(gestureState, State.BEGAN), [stopClock(clockY), translationY], translationY)
		);
		this.translateX = cond(
			eq(gestureState, State.END),
			[
				set(translationX, runSpring(clockX, translationX, snapPoint)),
				set(offsetX, translationX),
				cond(and(eq(clockRunning(clockX), 0), neq(translationX, 0)), [call([translationX], this.swipped)]),
				translationX
			],
			cond(eq(gestureState, State.BEGAN), [stopClock(clockX), translationX], translationX)
		);
	};

	swipped = ([translationX]: any) => {
		// console.log({ likes: translationX > 0 });
		if (translationX > 0) {
			setTimeout(() => {
				this.props.navigation.navigate("Record");
			}, 100);
			// this.props.navigation.navigate("Record");
		}
		const {
			profiles: [lastProfile, ...profiles]
		} = this.state;
		this.setState({ profiles }, this.init);
	};

	render() {
		const { onGestureEvent, translateX, translateY } = this;
		const {
			profiles: [lastProfile, ...profiles]
		} = this.state;
		const rotateZ = concat(
			interpolate(translateX, {
				inputRange: [-width / 2, width / 2],
				outputRange: [15, -15],
				extrapolate: Extrapolate.CLAMP
			}),
			"deg"
		);
		const likeOpacity = interpolate(translateX, {
			inputRange: [0, width / 4],
			outputRange: [0, 1]
		});
		const nopeOpacity = interpolate(translateX, {
			inputRange: [-width / 4, 0],
			outputRange: [1, 0]
		});
		const style = {
			...StyleSheet.absoluteFillObject,
			zIndex: 900,
			transform: [{ translateX }, { translateY }, { rotateZ }]
		};
		console.log(lastProfile);
		return (
			<SafeAreaView style={styles.container}>
				<LightStatusBar />
				<View style={styles.cards}>
					{profiles !== undefined ? profiles.reverse().map(profile => <Card key={profile.id} {...{ profile }} />) : null}
					<PanGestureHandler onHandlerStateChange={onGestureEvent} {...{ onGestureEvent }}>
						<Animated.View {...{ style }}>
							{profiles !== undefined ? <Card profile={lastProfile} {...{ likeOpacity, nopeOpacity }} /> : null}
						</Animated.View>
					</PanGestureHandler>
				</View>
				{/* <View style={styles.footer}>
					<View style={styles.circle}>
						<Icon name="x" size={32} color="#ec5288" />
					</View>
					<View style={styles.circle}>
						<Icon name="heart" size={32} color="#6ee3b4" />
					</View>
				</View> */}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	cards: {
		flex: 1,
		margin: 8,
		zIndex: 100
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		padding: 16
	},
	circle: {
		width: 64,
		height: 64,
		borderRadius: 32,
		padding: 12,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		shadowColor: "gray",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.18,
		shadowRadius: 2
	}
});

export default Profiles;
