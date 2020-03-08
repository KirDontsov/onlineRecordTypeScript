import { TextStyle } from "react-native";

export interface IContainer {
	flex?: number;
	width?: number;
	height?: number;
	justifyContent?: string;
	backgroundColor?: string;
	paddingTop?: number;
	paddingBottom?: number;
	container?: object;
}

export interface IStyles {
	container?: any;
	text?: TextStyle;
}

export interface IProfile {
	id: string;
	name: string;
	age: number;
	profile: any;
}
