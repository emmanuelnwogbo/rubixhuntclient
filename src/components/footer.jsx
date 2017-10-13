import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<footer className="container-fluid main__footer">
					<div className="top__footer">
						<p>
							{" "}
							<a href="#" className="footer__margin__right">
								{" "}
								Log In{" "}
							</a>{" "}
							<span className="footer__margin__right">|</span>{" "}
						</p>
						<p>
							{" "}
							<a href="#" className="footer__margin__right">
								{" "}
								Terms &amp; Condition{" "}
							</a>{" "}
							<span className="footer__margin__right">|</span>{" "}
						</p>
						<p>
							{" "}
							<a href="#"> Sign Up </a>{" "}
						</p>
					</div>
					<div className="bottom__footer">
						<p>&copy; 2017 Gigspace</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default connect(null, actions)(Footer);
