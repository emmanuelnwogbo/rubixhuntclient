import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import * as actions from "../actions";
//import "../css/sideBar.css";
import labels from "../utils/labels";

let { defaultMenu, profileMenu, helpMenu, categoryMenu } = labels;

let hrStyle = {
	marginTop: "0px"
};

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderMenu(subject) {
		return _.map(subject, ({ label }) => {
			return (
				<li className="nav__li__style nav__close__onclick nco" key={label}>
					<Link className="nav__items__extra" to={"/"}>
						{label}
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="navbar__overlay" />
				<nav className="menu navbar__white">
					<Link className="close" to={"/"}>
						<i className="fa fa-close pt-1 pl-2 pr-2 pb-2" />
					</Link>
					<h4 className="nav__close__onclick">
						<Link className="navbar__header navbar__header__green" to={"/"}>
							Gigspace
						</Link>
					</h4>
					<div className="special__nav__hr">
						<hr style={hrStyle} />
					</div>
					<ul className="nav__items navbar__one">
						<li className="nav__li__style category">
							<Link className="nav__items__extra" to={"/"}>
								Categories <i className="fa fa-angle-right ml-4 mt-1" />
							</Link>
						</li>
						<div className="when__logged__in">{this.renderMenu(helpMenu)}</div>

						<hr />
					</ul>
					<ul className="nav__items navbar__two">
						<li className="nav__li__style back">
							<a className="nav__items__extra">
								<i className="fa fa-angle-left mr-4 mt-1" /> Back
							</a>
						</li>
						<hr />
						{this.renderMenu(categoryMenu)}
					</ul>
				</nav>
			</div>
		);
	}
}

export default connect(null, actions)(SideBar);
