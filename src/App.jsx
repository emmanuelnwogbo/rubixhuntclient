import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import components from "./components";

import slidout_Jquery from "./utils/slideoutJquery";
//import "./App.css";

let { Home, Head, Header, Jumbotron, SideBar } = components;

class App extends Component {
	componentDidMount() {
		slidout_Jquery();
		console.log(process.env);
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Head />
						<Header />
						<SideBar />
						<section>
							<Jumbotron />
						</section>
						<div className="container">
							<Route exact path="/" component={Home} />
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

function mapStateToProps({ socialAuth }) {
	return { socialAuth };
}

export default connect(mapStateToProps, actions)(App);
