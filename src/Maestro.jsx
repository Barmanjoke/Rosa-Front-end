import React, { Component } from 'react';
import EntryChoice from './EntryChoice';
import Safespace from './Safespace';

class Maestro extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			current_uid: "entry_choice",
			user_profile: undefined,
		}
	}

	change_user_profile = (user_profile) => {
		this.setState({user_profile, current_uid: `home_${user_profile.type_uid}`}); 
	};

	render() {
		let pages = [
			{uid: "entry_choice", display: <EntryChoice change_state={this.change_user_profile} />},
			{uid: "home_individual", display: <EntryChoice change_state={this.change_user_profile} />},
			{uid: "home_business", display: <EntryChoice change_state={this.change_user_profile} />},
			{uid: "home_partner", display: <EntryChoice change_state={this.change_user_profile} />},
			{uid: "home_anonymous", display: <Safespace />},
		];

		const display = pages.filter((entry) => entry.uid === this.state.current_uid)[0].display;
		return (
			display
		);
	}
}

export default Maestro;