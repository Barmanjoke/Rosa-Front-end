import React from 'react';

class Profile extends React.Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render() {
		const first_name = this.props.user_profile.first_name;
		const last_name = this.props.user_profile.last_name;
		const picture = this.props.user_profile.picture;
		const description = this.props.user_profile.description;
		const badges = [
			{
				filename: "badge_coffee.png", 
				title: "Tea Enjoyer",
			},
			{
				filename: "badge_heart.png",
				title: "Lovely Chap",
			},
			{
				filename: "badge_home.png",
				title: "True Homey",
			},
			{
				filename: "badge_upvote.png",
				title: "Lovely Chap",
			},
			{
				filename: "badge_trophee.png",
				title: "Proud Survivor",
			},
		];
		return (
			<div id="profile" className="color2 container p-5 text-center bg-image">
				<div className="d-flex justify-content-center align-items-center h-100">
					<img
						className="img-thumbnail" 
						src={process.env.PUBLIC_URL + picture}
						style={{"width": "10rem" }}
						alt=""
					/>
					<h1 className="col-lg color2"> {`${first_name} ${last_name}`}</h1>
				</div>
				<hr/>
				<div className="row">
					<h2> {first_name}'s bio: </h2>
					<p className="col-lg text-white"> 
						{description}
					</p>
				</div>
				<hr/>
				<div className="row">
					<h2> {first_name}'s Community Badges </h2>
					{badges.map((elem) => (
						<div className="col-md">
							<img
								className="img-thumbnail" 
								src={process.env.PUBLIC_URL + elem.filename}
								style={{"width": "10rem" }}
								alt={elem.title}
							/>
							<br/>
							<p> <strong>{elem.title} </strong> </p>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Profile;