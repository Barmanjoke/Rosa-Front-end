import React, { Component } from 'react';
import Organisation from './Organisation';
import Template from './Template';

class Maestro_orga extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			current_uid: "orga",
		}

	}

	change_current_uid = (current_uid) => { console.log(current_uid); this.setState(current_uid); };

	render() {
		let pages = [
			{ uid: "orga", display: <Organisation change_current_uid={this.change_current_uid} /> },
			{ uid: "template", display: <Template change_current_uid={this.change_current_uid} /> },
		];

		const display = pages.filter((entry) => entry.uid === this.state.current_uid)[0].display;
		return (
			display
		);
	}
}

export default Maestro_orga;