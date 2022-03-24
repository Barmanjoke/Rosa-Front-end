import React, { Component } from 'react';
import Moocs from './Moocs';
import Event_on_sites from './Event_on_sites';
import Online_Ev from './Online_Ev';
import MCQs from './MCQs';

class Template extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			current_uid: "moocs",
		}
	}

	change_current_uid = (current_uid) => { console.log(current_uid); this.setState(current_uid); };

	render() {
		const title = `Template`;
		let pages = [
			{ uid: "save_temp", display: <Template change_current_uid={this.change_current_uid} /> },
			{ uid: "moocs", display: <Moocs change_current_uid={this.change_current_uid} /> },
			{ uid: "ev_on_sites", display: <Event_on_sites change_current_uid={this.change_current_uid} /> },
			{ uid: "online_ev", display: <Online_Ev change_current_uid={this.change_current_uid} /> },
			{ uid: "mcqs", display: <MCQs change_current_uid={this.change_current_uid} /> },
		];

		const display = pages.filter((entry) => entry.uid === this.state.current_uid)[0].display;
		return (
			<div>
				<button className="form-control btn-lg btn-block btn btn-success"> Saved templates </button>
				{display}
			</div>
		);
		/*
		return (
			<div>
				<div id="orga_page" className="p-5 text-center bg-image">
					<header className="d-flex justify-content-center align-items-center h-100">
						<div className="text-white">
							<h1 className="mb-3">
								<span className="color2">Template</span>
							</h1>
							<hr />

							<div>
								<button className="form-control btn-lg btn-block btn btn-success" onClick={this.change_saved_temp}> Saved templates </button>
								<br></br>
								{
									this.state.change_saved_temp ?
										<div>
											<br></br>
											<button className="form-control btn-lg btn-block btn btn-success"> </button>
										</div>
										: null
								}
								<br></br>
								<button className="form-control btn-lg btn-block btn btn-success" onClick={this.change_moocs}> Moocs </button>
								<br></br>
								<button className="form-control btn-lg btn-block btn btn-success" onClick={this.change_ev_on_sites}> Events on-site </button>
								<br></br>
								<button className="form-control btn-lg btn-block btn btn-success" onClick={this.change_online_ev}> Online Events </button>
								<br></br>
								<button className="form-control btn-lg btn-block btn btn-success" onClick={this.change_mcqs}> MCQS </button>
								<br></br>
							</div>
						</div>
					</header>
				</div>
			</div>
		);*/
	}
}

export default Template;