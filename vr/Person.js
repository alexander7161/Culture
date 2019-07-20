import React from "react";
import { View, Entity, asset } from "react-360";
export default class Person extends React.Component {
	render() {
		// Reference the count in our UI
		return (
			<View>
				<Entity source={{ gltf2: asset("person.glTF") }} />
			</View>
		);
	}
}
