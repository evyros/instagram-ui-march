
import React, { useContext } from 'react';
import './HeaderAvatar.scss';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../user-context';
import { Link } from 'react-router-dom';

function HeaderAvatar() {

	const { user } = useContext(UserContext);

	return (
		<div className="HeaderAvatar">
			<Link to={'/profile/' + user.username}>
				<Avatar size="md" />
				<span className="mx-2 HeaderAvatar__username d-none d-lg-block">{ user.username }</span>
			</Link>
		</div>
	);
}

export default HeaderAvatar;
