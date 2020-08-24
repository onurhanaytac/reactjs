import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeComponent extends Component {
	render() {
		return (
			<div style={{ width: '100%' }}>
				<div className="divider">
					<Link to="/movies">
						<div className="movies">Movies</div>
					</Link>
				</div>

				<div className="divider divider-right">
					<Link to="/series">
						<div className="series">Series</div>
					</Link>
				</div>
			</div>
		)
	}
}
