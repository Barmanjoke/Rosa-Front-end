import React from 'react';

class Courses extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			selected_course: undefined
		}
	}

	render() {

		const vss = {
			uid: "synergy",
			title: "STOP aux violences sexistes, sexuelles, et aux discriminations",
			description: "A small French pamphlet aiming at raising awareness on the forms of sexist and sexual violences, as well as those of discriminations.",
			publisher: "EPITA Paris",
			thumbnail: `${process.env.PUBLIC_URL}epita.png`
		};
		const course_list = [vss, vss, vss];
		return (
			<div className="container">
				<h1 className="text-center text-white"> Available Online Courses: </h1>
				<div className="row">
				{
					course_list.map((elem) => (
						<div className="card col-md mr-2" style={{width: "18rem"}}>
						  <img src={elem.thumbnail} className="card-img-top" alt={elem.title}/>
						  <div className="card-body">
						    <h5 className="card-title">{elem.title}</h5>
						    <p className="card-text">{elem.description}</p>
						    <a 
						    	href="https://www.epita.fr/"
						    	target="_blank" 
						    	className="btn btn-primary"
						    	rel="noreferrer"
						    >
						    	Go to the organisation's website
						    </a>
						  </div>
						</div>
					))
				}
				</div>
			</div>
		);
	}
}

export default Courses;