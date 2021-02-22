
import Cookies from 'js-cookie';
import environment from '../environments/index';

export class UserService {

	static getToken() {
		return Cookies.get('instagram-user');
	}

	static me() {
		return fetch(environment.apiUrl + '/user/me', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: UserService.getToken()
			}
		}).then(res => {
			if (res.status !== 200) {
				return null;
			}
			return res.json();
		});
	}

	static create(data) {
		return fetch(environment.apiUrl + '/user', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}

	static login(credentials) {
		return fetch(environment.apiUrl + '/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		});
	}

}


