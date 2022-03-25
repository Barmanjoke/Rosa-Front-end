import React from 'react';

class Courses extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			selected_course: undefined
		}
	}

	select_course = (selected_course) => {
		this.setState({selected_course});
	}

	render() {

		const vss = {
			uid: "synergy",
			title: "STOP aux violences sexistes, sexuelles, et aux discriminations",
			description: "A short French pamphlet aiming at raising awareness on the forms of sexist and sexual violences, as well as those of discriminations.",
			publisher: "EPITA Paris",
			thumbnail: `${process.env.PUBLIC_URL}epita.png`
		};

		const course_list = [vss, vss, vss];
		if(typeof this.state.selected_course === "undefined"){
			return (
				<div className="container">
					<h1 className="text-center text-white"> Available Online Courses: </h1>
					<div className="row">
					{
						course_list.map((elem) => (
							<div className="card col-md mr-2" style={{width: "18rem"}} onClick={() => this.select_course(elem)}>
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
		} else {
			const course = course_list.filter((entry) => entry.uid === this.state.selected_course.uid)[0];
			return (
				<div className="container text-center">
					<br/>
					<header className="bg_color1">
						<h1 className="color2"> 
							{course.title}
						</h1>
						<h3 className="text-white">
							{course.description}
						</h3>
					</header>
					<br/>
					<main>
						<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
						  <div className="carousel-indicators">
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
						    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
						  </div>
						  <div className="carousel-inner">
						    <div className="carousel-item active">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-1.png`} className="d-block w-100" alt=""/>
						    </div>
						    <div className="carousel-item">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-2.png`} className="d-block w-100" alt=""/>
						    </div>
						    <div className="carousel-item">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-3.png`} className="d-block w-100" alt=""/>
						    </div>
						    <div className="carousel-item">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-4.png`} className="d-block w-100" alt=""/>
						    </div>
						    <div className="carousel-item">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-5.png`} className="d-block w-100" alt=""/>
						    </div>
						    <div className="carousel-item">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-6.png`} className="d-block w-100" alt=""/>
						    </div>
						    <div className="carousel-item">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-7.png`} className="d-block w-100" alt=""/>
						    </div>
						    <div className="carousel-item">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-8.png`} className="d-block w-100" alt=""/>
						    </div>
						    <div className="carousel-item">
						      <img style={{"max-height": "100vh"}} src={`${process.env.PUBLIC_URL}VSS_Guide-9.png`} className="d-block w-100" alt=""/>
						    </div>
						  </div>
						  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
						    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
						    <span className="visually-hidden">Previous</span>
						  </button>
						  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
						    <span className="carousel-control-next-icon" aria-hidden="true"></span>
						    <span className="visually-hidden">Next</span>
						  </button>
						</div>						
					</main>
				</div>
			);
		}
	}
}

export default Courses;