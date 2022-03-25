import React from 'react';

class Feed extends React.Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render() {
		const content = [
			{
				publisher_logo:"maya_angelou.jpg",
				publisher_name:"Maya Angelou",
				publish_date:"24th of March 2022",
				content:"“Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.”",
			},
			{
				publisher_logo:"aime.png",
				publisher_name:"Aimé Cesaire",
				publish_date:"24th of March 2022",
				content: (
					<div>
					<audio 
						controls 
						src={`${process.env.PUBLIC_URL}rolling.mp3`}
					>
						Your browser does not support the <code>audio</code> element.
					</audio>
					</div>
				),
			},
			{
				publisher_logo:"greta.png",
				publisher_name:"Greta Thunberg",
				publish_date:"19th of March 2022",
				content:<em> is going to the <a href="https://youthforclimate.be/" target="_blank" rel="noreferrer"> Youth for Climate Belgium.</a> </em>,
			},
			{
				publisher_logo: "start_hack.jpg",
				publisher_name: "Start Hack",
				publish_date: "31th of March 2019" ,
				content:<iframe width="560" height="315" src="https://www.youtube.com/embed/oT6VWQuRqHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			}
		];
		return (
			<div id="feed" className="card container" style={{"margin-top": "1vh"}}>
			{
				content.map((elem) => (
						<article className="row">
							<br/>
							<header className="col-lg">
								<p 
									className="col-sm alert"
									style={{"text-align": "left"}}
								> 
									<img 
										src={process.env.PUBLIC_URL+elem.publisher_logo}
										className="card-img-top"
										alt={elem.publisher_name}
										style={{width: '3rem', "text-align": "left", "margin-right": "1vw"}}
									/>
									<strong>{elem.publisher_name}</strong> shared on the <strong>{elem.publish_date}</strong>: 
								</p>
							</header>
							<main className="text-center">
								{elem.content}
							</main>
							<br/>
						</article>
					)
				)
			}
			</div>
		);
	}
}

export default Feed;