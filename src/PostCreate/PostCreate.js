import React from 'react';
import './PostCreate.scss';

function PostCreate(props) {
	return (
		<div>
			<h1>Create post</h1>
			<input type="file" />
			<textarea></textarea>
			<button>Send</button>
		</div>
	);
}

export default PostCreate;
