import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Post.scss';
import { Link } from 'react-router-dom';

function Post({ data }) {
	return (
		<div className="Post">
			<div>
				<Avatar size="sm" image={data.user.avatar} />
				{data.user.username}
			</div>
			<div>
				<Link to={'/post/' + data._id}>{data.createdAt}</Link>
			</div>
			<div>{data.description}</div>
			<div>
				<img src={'data:; base64,' + data.image} className="Post__image" />
			</div>
		</div>
	);
}

export default Post;
