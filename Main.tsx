import * as React from "react";
import { Provider, configureFonts, DefaultTheme } from "react-native-paper";

import App from "./App";

const fontConfig = {
	default: {
		regular: {
			fontFamily: "sans-serif",
			fontWeight: "normal"
		},
		medium: {
			fontFamily: "sans-serif-medium",
			fontWeight: "normal"
		},
		light: {
			fontFamily: "sans-serif-light",
			fontWeight: "normal"
		},
		thin: {
			fontFamily: "sans-serif-thin",
			fontWeight: "normal"
		}
	}
};

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: "#613EEA",
		accent: "#FA2E69"
	},
	fonts: configureFonts(fontConfig)
};

const Main = () => {
	return (
		<Provider theme={theme}>
			<App />
		</Provider>
	);
};

export default Main;
