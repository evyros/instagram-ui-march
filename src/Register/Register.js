import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import './Register.scss';
import { registerSchema } from './register.schema';

function Register() {

	const history = useHistory();

	function submit(values) {
		fetch('http://localhost:4000/user', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		}).then(res => {
			if (res.status === 201) {
				history.push('/login');
				return;
			}
			console.log('failure!!!');
		});
	}

	return (
		<div>
			<h2>Register</h2>
			<Formik
				initialValues={{username: '', email: '', password: '', agreeToTerms: false}}
				validationSchema={registerSchema}
				onSubmit={submit}>
				<Form>
					<div className="form-group mb-3">
						<label htmlFor="username">Username</label>
						<Field className="form-control" id="username" name="username" />
						<ErrorMessage name="username" component="div" />
					</div>
					<div className="form-group mb-3">
						<label htmlFor="email">Email</label>
						<Field type="email" className="form-control" id="email" name="email" />
						<ErrorMessage name="email" component="div" />
					</div>
					<div className="form-group mb-3">
						<label htmlFor="password">Password</label>
						<Field type="password" className="form-control" id="password" name="password" />
						<ErrorMessage name="password" component="div" />
					</div>
					<div className="form-group form-check mb-3">
						<Field type="checkbox" className="form-check-input" id="agreeToTerms" name="agreeToTerms" />
						<label className="form-check-label" htmlFor="agreeToTerms">Agree to terms</label>
						<ErrorMessage name="agreeToTerms" component="div" />
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-success">Register</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default Register;
