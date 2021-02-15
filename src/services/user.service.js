
import Cookies from 'js-cookie';

export class UserService {

	static getToken() {
		return Cookies.get('instagram-user');
	}

	static me() {
		return fetch('http://localhost:4000/user/me', {
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
		return fetch('http://localhost:4000/user', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}

	static login(credentials) {
		return fetch('http://localhost:4000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		});
	}

}


