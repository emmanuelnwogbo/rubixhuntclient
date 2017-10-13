import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
//import "../css/slideout.css";

const Menu = () => {
	return (
		<div>
			<li className="nav__li__style nav__close__onclick nco">
				<a className="nav__items__extra">My Skills</a>
			</li>
		</div>
	);
};

export default Menu;
