import React, { Component } from 'react';

class Feed extends React.Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render() {
		const content = [
			{
				publisher_logo:"",
				publisher_name:"",
				publish_date:"",
				content:"",
			}
		];
		return (
			<p> 
				Feed 
			</p>
		);
	}
}

export default Feed;