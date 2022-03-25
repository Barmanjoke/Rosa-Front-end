import React from 'react';
import EntryChoice from './EntryChoice';
import Safespace from './Safespace';
import HomeIndividual from './HomeIndividual';	
import MaestroOrga from './MaestroOrga';


const fake_individual_profile = {
	first_name: "Alice",
	last_name: "Caroll",
	picture: "alice.png",
	description: <p> Have you ever fallen down a rabbit hole and thought you'd never be back? <br/> Only to be treated as a weirdo by the people around you while you were doing so? <br/> Well, I have a good news, you do get back on the <strong> right side of the mirror!</strong> </p>,
};

class Maestro extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			current_uid: "entry_choice",
			user_profile: undefined,
		}
	}

	/**
	 * @param {'individual'|'business'|'partner'} type_uid 
	 * @param {object} user_profile 
	 */
	change_user_profile = (type_uid, user_profile) => {
		this.setState({user_profile, current_uid: `home_${type_uid}`}); 
	};

	render() {
		let pages = [
			{uid: "entry_choice", display: <EntryChoice change_state={this.change_user_profile} />},
			{uid: "home_individual", display: <HomeIndividual user_profile={fake_individual_profile} />},
			{uid: "home_business", display: <MaestroOrga change_state={this.change_user_profile} />},
			{uid: "home_partner", display: <EntryChoice change_state={this.change_user_profile} />},
			{uid: "home_anonymous", display: <Safespace />},
		];
		const display = pages.filter((entry) => entry.uid === this.state.current_uid)[0].display;
		return (
			<div id="maestro">
				{display}
			</div>
		);
	}
}

export default Maestro;