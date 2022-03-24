import React, { Component } from 'react';
import Select from 'react-select';
import Maestro_orga from './Maestro_orga';
import Template from './Template';

class Organisation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			create_session: false,
			user_name: "",
			session_option: "G5Gff5dFFd65sd",
			onClick: false,
			onTemplate: false,
			current_uid: "orga",
		}
	}
	CopyonClick = () => { navigator.clipboard.writeText(`https://register/${this.state.session_option}`) };
	change_sess_create = () => { this.setState({ create_session: true }) };

	render() {

		const title = `Hi ${this.state.user_name}, welcome back!`;

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

		const MyComponent = () => (<Select options={options} />)

		let funct_to_temp = this.state.onTemplate ? <Maestro_orga /> : <button className="btn btn-success btn-lg btn-block" onClick={() => { this.props.change_current_uid({ current_uid: "template" }) }}> Template </button>;

		return (
			<div id="orga_page" className="p-5 text-center bg-image">
				<header className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white">
						<h1 className="mb-3">
							<span className="color2">Rosaparks.app</span>
						</h1>
						<h4 className="mb-3">
							Empowering the <span className="color2">wronged</span> , enabling the <span className="color2">witness</span> , teaching the <span className="color2">uninformed</span>.
						</h4>
						<hr />
						<h2> {title} </h2>
						<br></br>
						<div>
							{funct_to_temp}
						</div>
						<br></br>
						<div>
							<label> How long the session is available: </label>
							<MyComponent />
						</div>
						<br></br>
						<button className="form-control btn-lg btn-block btn btn-success" onClick={this.change_sess_create}> Create session </button>
						<br></br>
						{
							this.state.create_session ?

								<div>
									<br></br>
									<button className="form-control btn-lg btn-block btn btn-success" onClick={this.CopyonClick}> https://register/{this.state.session_option} </button>
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