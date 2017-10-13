import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
//import "../css/jumbotron.css";

class Jumbotron extends Component {
	componentDidMount() {
		console.log(this.props);
	}

	renderJumbotron() {
		if (this.props.socialAuth.uid) {
			return <div />;
		}

		return (
			<div>
				<div className="header__jumbo">
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h4 className="h4">Fluid jumbotron</h4>
							<p className="lead">
								This is a modified jumbotron that occupies the entire horizontal
								space of its parent.
							</p>
							<a className="btn btn-outline-green">GET STARTED</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.renderJumbotron()}</div>;
	}
}

function mapStateToProps({ socialAuth }) {
	return { socialAuth };
}

export default connect(mapStateToProps, actions)(Jumbotron);
