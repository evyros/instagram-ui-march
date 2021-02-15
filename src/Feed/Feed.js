

import React, { useEffect } from 'react';
import { PostService } from '../services/post.service';
import './Feed.scss';

function Feed() {

	useEffect(() => {
		PostService.feed()
			.then(posts => console.log(posts));
	}, []);

	return (
		<div>
			Feed!
		</div>
	);
}

export default Feed;
