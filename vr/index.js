import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";
import App from "./App";
import Person from "./Person";
export default class vr extends React.Component {
	render() {
		return (
			<View style={styles.panel}>
				<App />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	panel: {
		// Fill the entire surface
		width: 1000,
		height: 600,
		backgroundColor: "rgba(255, 255, 255, 0.4)",
		justifyContent: "center",
		alignItems: "center"
	},
	greetingBox: {
		padding: 20,
		backgroundColor: "#000000",
		borderColor: "#639dda",
		borderWidth: 2
	},
	greeting: {
		fontSize: 30
	}
});

AppRegistry.registerComponent("Person", () => Person);
AppRegistry.registerComponent("vr", () => vr);
