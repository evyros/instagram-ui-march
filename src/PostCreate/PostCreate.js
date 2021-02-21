import React from 'react';
import './PostCreate.scss';

function PostCreate() {
	return (
		<div className="d-flex row">
			<div className="col-lg-6 order-sm-0 order-lg-1 my-3">
				<h2 className="PostCreate__title">Create Post</h2>
				<form className="PostCreate__form mt-5 col-lg-8 px-0" noValidate>
					<div className="form-group my-3">
						<input type="file" id="image" name="image" className="form-control" />
					</div>
					<div className="form-group my-3">
						<label className="form-label" htmlFor="description">Description</label>
						<textarea className="form-control" name="description" id="description"></textarea>
					</div>
					<div className="form-group text-right my-3">
						<button type="submit" className="mt-3 PostCreate__submit-btn">Post</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default PostCreate;
