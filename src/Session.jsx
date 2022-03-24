import React, { Component } from 'react';


class Session extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			create_session: false,
			user_name: "",
		}
	}

	render() {
		const title = `Session`;

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
					</div>
				</header>
			</div>
		);
	}
}

export default Session;