import axios from 'axios';

class ApiClient {
	constructor() {
		this.apiClient = axios.create({
			baseURL: "http://localhost:5000",
			withCredentials: true,
		});
	}

	me() {
		return this.apiClient.get('/whoami').then(response => response.data);
	}

	signup(user) {
		const { username, password, email } = user;
		return this.apiClient.post('/signup', { username, password, email }).then(({ data }) => data);
	}

	login(user) {
		const { username, password } = user;
		return this.apiClient.post('/login', { username, password }).then(({ data }) => data);
	}

	logout() {
		return this.apiClient.get('/logout', {}).then(response => response.data);
	}

	//  updateUser(id,body) {
	//  	return this.apiClient.put(`/user/${id}/profile`, body).then(({data}) => data)
	// }

}

const apiClient = new ApiClient();

export default apiClient;
