import React, { Component } from 'react';
import EntryChoice from './EntryChoice';

class Maestro extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			current_uid: "entry_choice",
			user_profile: undefined,
		}
	}

	change_user_profile = (user_profile) => {
		this.setState({user_profile, current_uid: `register_${user_profile}`}); 
	};

	render() {
		let pages = [
			{uid: "entry_choice", display: <EntryChoice change_state={this.change_user_profile} />},
			{uid: "register_individual", display: <p> individual </p>},
			{uid: "register_partner", display: <p> partner </p>},
			{uid: "register_business", display: <p> business </p>},
		];

		const display = pages.filter((entry) => entry.uid === this.state.current_uid)[0].display;
		return (
			display
		);
	}
}

export default Maestro;