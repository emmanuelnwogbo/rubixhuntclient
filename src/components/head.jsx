import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Head extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "rubixhunt"
		};
	}

	render() {
		return (
			<div>
				<title>{this.state.title}</title>
			</div>
		);
	}
}

export default connect(null, actions)(Head);
