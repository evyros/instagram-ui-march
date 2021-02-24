import React from 'react';
import './PostCreate.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import { PostCreateSchema } from './post-create.schema';
import environment from '../environments/index';
import { UserService } from '../services/user.service';

function PostCreate() {

	const history = useHistory();

	async function submit(values) {
		const data = new FormData();
		data.append('image', values.image);
		data.append('description', values.description);

		try {
			await fetch(environment.apiUrl + '/post', {
				method: 'PUT',
				body: data,
				headers: {
					Authorization: UserService.getToken()
				}
			});
			history.push('/');
		} catch(err) {
			console.log(err);
		}
	}

	return (
		<div className="d-flex row">
			<div className="col-lg-6 order-sm-0 order-lg-1 my-3">
				<h2 className="PostCreate__title">Create Post</h2>
				<Formik
					initialValues={{ image: '', description: '' }}
					validationSchema={PostCreateSchema}
					onSubmit={submit}>
					{({ setFieldValue, isSubmitting }) => (
						<Form className="PostCreate__form mt-5 col-lg-8 px-0" noValidate>
							<div className="form-group my-3">
								<input type="file"
								       id="image"
								       name="image"
								       className="form-control"
								       onChange={(e) => setFieldValue('image', e.target.files[0])}
								/>
								<ErrorMessage component="small" name="image" className="PostCreate__form__error" />
							</div>
							<div className="form-group my-3">
								<label className="form-label" htmlFor="description">Description</label>
								<Field as="textarea" className="form-control" name="description" id="description" />
								<ErrorMessage component="small" name="description" className="PostCreate__form__error" />
							</div>
							<div className="form-group text-right my-3">
								<button type="submit"
								        className="mt-3 PostCreate__submit-btn"
										disabled={isSubmitting}>
									{ isSubmitting ? 'Posting...' : 'Post' }
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default PostCreate;
