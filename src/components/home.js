import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";


class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
		< PageHeader titleText = "React App Project" />
				<div className="jumbotron">
					<h1 className="display-4">Hello, React!</h1>
					<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					<hr className="my-4"></hr>
					<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
					<p className="lead">
						< Link className = "btn btn-primary btn-lg"
						to = "/about" >About</Link>
					</p>
				</div>
      </div>
    );
  }
}

export default Home;