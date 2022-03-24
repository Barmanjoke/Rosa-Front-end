import React, { Component } from 'react';

import '@barmanjoke/react-chatbox-component/dist/style.css';
import {ChatBox} from '@barmanjoke/react-chatbox-component';

const Hedy = {
  "name": "Hedy Lamarr",
  "uid": "hedy",
  "avatar": `${process.env.PUBLIC_URL}/hedy_lamarr.png`,
};

const alice = {
  "name": "anon_9846",
  "uid": "user1",
  "avatar": `${process.env.PUBLIC_URL}/anon.png`,
};

class Safespace extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			user: {
			  "uid" : "user1", //do not change this value, for whatever reason, the lib doesn't accept change :/
			},
			messages: [
				{
				    "text": "Hello there",
				    "id": "1",
				    "sender": Hedy
			    },
		    	{
		    	    "text": "How can I help you?",
		    	    "id": "2",
		    	    "sender": Hedy
		        },
			    {
			      	"text": "Oh my God!!! Are you really Hedy Lamarr???",
			      	"id": "3",
			      	"sender": alice
			    },
		        {
		          	"text": "Yeah! 😅",
		          	"id": "4",
		          	"sender": Hedy
		        },
			],
			msg_being_written: undefined,
		}
	}

	change_user_profile = (user_profile) => {
		this.setState({user_profile, current_uid: `home_${user_profile.type_uid}`}); 
	};

	change_msg_being_written = (msg_being_written) => {
		this.setState({msg_being_written});
	};

	get_that = () => this;
	
	register_message(msg) {
		console.log("tis", this);
		let that = this.that_generator();
		let msgs = that.state.messages;
		msgs.push(msg);
		that.setState({messages: msgs}); 
	}

	render() {
		const messages = this.state.messages;
		return (
			<div id="safespace" className="container">
				<br/>
				<header className="d-flex justify-content-center align-items-center h-100 text-white">
				<h1 className="text-center col-lg mb-3"> 
					Welcome to your <span className="color2">Safespace!</span>
				</h1>
				<br/>
				</header>
				<div>
					<h3 className="color2"> About your interlocutor: </h3>
					<p className="mb-3 text-white"> 
						You have been matched with <strong className="color2">Hedy Lamarr</strong>. Hedy Lamarr is known for her career as an actress, but she was also a <strong className="color2">brilliant engineer</strong> who co-invented a radio guidance system in WWII. Unfortunately, <strong className="color2">no one took her seriously</strong> because she was a <strong className="color2">woman</strong>, and so it took 20 years for her technology to be rediscovered. 
					</p>
					<ChatBox
					  messages={messages}
					  that_generator={this.get_that}
					  onSubmit={this.register_message}
					/>
				</div>
				<div className="container">
				  <nav className="navbar">
				    <a className="btn navbar-btn btn-danger btn-lg" href="#"> Report an abuse. </a>
				    <a className="btn navbar-btn btn-warning btn-lg" href="#"> Contact a psychologist. </a>
				{/*<small className="color2"> By reporting your interlocutor, the conversation will end immediately, and the RosaParks.app team will make sure to take the appropriate measures. </small> */}

				  </nav>
				</div>
			</div>
		);
	}
}

export default Safespace;