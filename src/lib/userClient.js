import axios from 'axios';

class UserClient {
	constructor() {
		this.userClient = axios.create({
			baseURL: "http://localhost:5000",
			withCredentials: true,
		});
	}

	getUserProfile(id) {
		return this.userClient.get(`/user/${id}/profile`).then(response => response.data);
	}

	getUpdateProfile(id,body) {
    
		return this.userClient.put(`/user/${id}/profile`, body).then(({ data }) => data);
	}

	getUserCreatedRecipesList() {
		return this.userClient.get(`/user/create`).then(({ data }) => data);
	}

	getUserCreateRecipe(body) {
		return this.userClient.post(`/user/create`, body).then((res )=> res.data);
	}

  getUserDeleteRecipeCreated(id) {
		return this.userClient.delete(`/user/create/${id}`).then(({ data }) => data);
	}

   getUserFavouriteList() {
		return this.userClient.get('/user/favourites').then(({ data }) => data);
	}

  getUserDeleteRecipeFromFav(id) {
		return this.userClient.delete(`/user/favourites/${id}`).then(({ data }) => data);
	}

};

const userClient = new UserClient();

export default userClient;
