import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class WhatToPost extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<section className="">
					<div className="post__header">
						<p>I am posting...</p>
					</div>
					<div className="post__content">
						<div className="posting__a__skill">
							<a className="secondary__posting">
								<p className="posting__content__header">...a skilled profile</p>
								<div className="text-center">
									<span>
										A skilled profile showcases your skills to potential
										partners and employers.
									</span>
								</div>
							</a>
						</div>

						<div className="posting__a__project">
							<a className="secondary__posting">
								<p className="posting__content__header">...a project</p>
								<div className="text-center">
									<span>
										Have a project that you would like to get off the ground,
										creating a project is a good way of getting potential
										partners.
									</span>
								</div>
							</a>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default connect(null, actions)(WhatToPost);
