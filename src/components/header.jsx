import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
//import "../css/header.css";

import LoginModal from "./loginModal";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.openLoginModal = this.openLoginModal.bind(this);
	}

	openLoginModal() {
		//I'm getting this id from the LoginModal Component
		let log__modal = document.getElementById("log__modal");
		log__modal.style.display = "block";
	}

	headerMarkUp() {
		if (this.props.socialAuth.uid) {
			console.log(this.props);
			return (
				<div className="header__loggedin__image header__margin__left">
					<a className="dropdown-toggle" data-toggle="dropdown">
						<img
							src={this.props.socialAuth.photoURL}
							className="profile-photo"
						/>
					</a>
				</div>
			);
		}

		return (
			<div>
				<a
					className="header__margin__left"
					id="open__log__modal"
					onClick={this.openLoginModal}
				>
					Log In
				</a>
			</div>
		);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<LoginModal />
				<header className="container-fluid main__header color__white fixed__header">
					<div className="header__content__left">
						<a className="menu-toggle" id="nav-expander">
							<i className="fa fa-bars header__margin__right" />
						</a>
						<div className="color__logo__default">
							<a />
							<a className="desktop__responsive__logo">
								<h4>Gigspace</h4>
							</a>
						</div>
						<div className="header__content__right button__hover">
							<a className="fa fa-search" />
							{this.headerMarkUp()}
							<i className="pl-1" />
							<a className="btn btn-post-green text-white header__margin__left">
								Post
							</a>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

function mapStateToProps({ socialAuth }) {
	return { socialAuth };
}

export default connect(mapStateToProps, actions)(Header);
