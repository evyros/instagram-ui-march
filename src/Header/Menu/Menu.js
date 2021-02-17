import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

function Menu() {
	return (
		<ul className="navbar-nav">
			<li className="navbar-item">
				<Link to="/post/create">Create post</Link>
			</li>
		</ul>
	);
}

export default Menu;
