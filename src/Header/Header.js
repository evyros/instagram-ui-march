import React from 'react';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';
import './Header.scss';
import Menu from './Menu/Menu';

function Header() {
	return (
		<header className="Header">
			<nav className="navbar navbar-dark bg-dark">
				<div className="container justify-content-start">
					<a className="navbar-brand" href="/">Instagram</a>

					<Menu />

					<div className="nav ml-auto">
						<HeaderAvatar />
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
