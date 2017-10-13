import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
//import "../css/loginModal.css";

class LoginModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.closeLoginModal = this.closeLoginModal.bind(this);
		this.login = this.login.bind(this);
	}

	closeLoginModal() {
		let log__modal = document.getElementById("log__modal");
		log__modal.style.display = "none";
	}

	login(event) {
		if (event.target.textContent === "Log In with Facebook") {
			return this.props.facebookSignIn();
		}
		if (event.target.textContent === "Log In with Google") {
			return this.props.googleSignIn();
		}
		if (event.target.textContent === "Log In with Twitter") {
			return this.props.twitterSignIn();
		}
		if (event.target.textContent === "Log In with Github") {
			return this.props.githubSignIn();
		}
	}

	componentDidMount() {
		//console.log(this.props);
	}

	render() {
		return (
			<div>
				<div
					id="log__modal"
					className="log__modal"
					onClick={this.closeLoginModal}
				>
					<div className="log__modal__content">
						<div className="log__modal__header">
							<span className="close__log__modal" id="close__log__modal">
								<a onClick={this.closeLoginModal}>⛌</a>
							</span>
						</div>
						<div className="log__modal__body">
							<button className="btn log__facebook" onClick={this.login}>
								<i className="fa fa-facebook mr-3" />Log In with Facebook
							</button>
							<button className="btn log__google" onClick={this.login}>
								<img src="img/google.png" className="mr-3" />Log In with Google
							</button>
							<button className="btn log__twitter" onClick={this.login}>
								<i className="fa fa-twitter mr-3" />Log In with Twitter
							</button>
							<button className="btn log__github" onClick={this.login}>
								<i className="fa fa-github mr-3" />Log In with Github
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ socialAuth }) {
	return { socialAuth };
}

export default connect(mapStateToProps, actions)(LoginModal);
