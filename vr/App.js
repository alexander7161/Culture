import React from "react";
import { Text, View, VrButton, Entity, asset } from "react-360";
export default class App extends React.Component {
	state = {
		count: 0
	};

	// This method increments our count, triggering a re-render
	_incrementCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		// Reference the count in our UI
		return (
			<View>
				<VrButton onClick={this._incrementCount}>
					<Text>{`Count: ${this.state.count}`}</Text>
				</VrButton>
			</View>
		);
	}
}
