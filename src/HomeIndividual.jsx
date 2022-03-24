import React from 'react';
import Feed from './Feed'
import Courses from './Courses'
import Profile from './Profile'

class HomeIndividual extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			current_uid: "feed"
		}
	}

	change_active_state = (current_uid) => {this.setState({current_uid});};

	render() {
		const nav_btns = [
			{
				uid: "feed", 
				display: "Feed", 
				is_active: this.state.current_uid === "feed"
			},
			{
				uid: "courses", 
				display: "Courses", 
				is_active: this.state.current_uid === "courses"
			},
			{
				uid: "profile", 
				display: "Your Profile", 
				is_active: this.state.current_uid === "profile"
			}
		];

		const pages = [
			{
				uid: "feed" ,
				display: <Feed />,
			},
			{
				uid: "courses" ,
				display: <Courses />,
			},
			{
				uid: "profile" ,
				display: <Profile />,
			},
		];

		const display = pages.filter((entry) => entry.uid === this.state.current_uid)[0].display;
		return (
			<div id="home_individual">
				<nav class="navbar sticky-top color2">
					<li class="navbar-brand">
						<strong className="color2">{`Hello, ${this.props.user_profile.name}`}</strong>
					</li>
					{
						nav_btns.map((elem) => (
							<li 
								className={(elem.is_active ? "btn-light " : "")+  "btn btn-lg my-2 my-sm-0 color2"}
								onClick={() => this.change_active_state(elem.uid)}
							>
						    	{elem.display}
							</li>
						))
					}
					<form className="form-inline">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
						<button className="btn btn-lg btn-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</nav>
				{display}
			</div>
		);
	}
}

export default HomeIndividual;