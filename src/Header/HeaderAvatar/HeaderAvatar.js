
import React, { useContext } from 'react';
import './HeaderAvatar.scss';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../user-context';

function HeaderAvatar() {

	const { user } = useContext(UserContext);

	return (
		<div className="HeaderAvatar">
			<Avatar size="md" />
			{ user.username }
		</div>
	);
}

export default HeaderAvatar;
