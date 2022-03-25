import React from 'react';
import Register from './Register';
import LogIn from './LogIn';

import Particles from './Particles';

class EntryChoice extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			wanna_log_in: false,
			wanna_register: false,
		}
	}

	wanna_log_in = () => { this.setState({wanna_log_in: true, wanna_register: false}) };
	change_wanna_register = () => { this.setState({wanna_log_in: false, wanna_register: true}) };

	handle_anonymous_login = () => { this.props.change_state({type_uid: "anonymous"})};

	render() {
		let register_display = this.state.wanna_register ? <Register /> :
			<button className="btn btn-success btn-lg btn-warning" onClick={this.change_wanna_register}> 
				Register
			</button>
		;
		let log_in_display = this.state.wanna_log_in ? <LogIn /> : 
			<button className="btn btn-success btn-lg btn-block" onClick={this.wanna_log_in}> 
				Log In 
			</button>
		;
		return (
			<div id="entry_choice" className="p-5 text-center bg-image">
				<Particles/>
				<header className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white">
						<h1 className="mb-3"> 
							<span className="color2">Rosaparks.app</span> 
						</h1>
						<h4 className="mb-3"> 
							Empowering the <span className="color2">wronged</span> , enabling the <span className="color2">witness</span> , teaching the <span className="color2">uninformed</span>.
						</h4>
						<hr/>
						<div className="row">
							<div className="col-md">
								<button 
									className="btn btn-primary btn-block btn-lg"
									onClick={this.handle_anonymous_login}
								> 
									Access Safezone Anonymously
								</button>
							</div>
							<div className="col-md">
								{register_display}
							</div>
							<div className="col-md">
								{log_in_display}
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default EntryChoice;