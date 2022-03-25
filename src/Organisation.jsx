import React, { Component } from 'react';
import Select from 'react-select';
import Maestro_orga from './Maestro_orga';

class Organisation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			create_session: false,
			user_name: "Spring ACT",
			session_option: "G5Gff5dFFd65sd",
			onClick: false,
			onTemplate: false,
			current_uid: "orga",
		}
	}
	CopyonClick = () => { navigator.clipboard.writeText(`https://register/${this.state.session_option}`) };
	change_sess_create = () => { this.setState({ create_session: true }) };

	render() {

		const title = <h1> Good day to you, dear admin from <strong className="color2"> {this.state.user_name}</strong>!</h1>;

		const options = [
			{ value: 'hours', label: '12 hours' },
			{ value: 'a_day', label: '24 hours' },
			{ value: 'five_days', label: '5 days' },
			{ value: 'seven_days', label: '7 days' },
			{ value: 'half_month', label: '15 days' },
			{ value: 'month', label: '1 month' },
			{ value: 'two_months', label: '2 months' },
			{ value: 'six_months', label: '6 months' }
		]
		const custom_style = {
			option: (provided, state) => ({
			    ...provided,
			    color: state.isSelected ? 'yellow' : 'black',
			    padding: 20,
			  }),
		}
		const MyComponent = () => (<Select options={options} styles={custom_style} menuColor="red" />)

		let funct_to_temp = () => {};

		return (
			<div id="orga_page" className="p-5 text-center bg-image">
				<header className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white">
						<h2> {title} </h2>
						<br></br>
						<div>
							{funct_to_temp}
						</div>
						<br></br>
						<div>
							<label> How long will the session be available? </label>
							<MyComponent />
						</div>
						<br></br>
						<button className="form-control btn-lg btn-block btn btn-success" onClick={this.change_sess_create}> Create session </button>
						<br></br>
						{
							this.state.create_session ?

								<div>
									<br></br>
									<button className="form-control btn-lg btn-block btn btn-success" onClick={this.CopyonClick}> https://rosaparks.app/register/{this.state.session_option} </button>
								</div>
								: null
						}

					</div>
				</header>

			</div>
		);
	}
}

export default Organisation;