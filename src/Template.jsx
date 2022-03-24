import React, { Component } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

class Template extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		const title = `Template`;

		return (
			<div>
				sidebar menu
			</div>
		);
	}
}

export default Template;