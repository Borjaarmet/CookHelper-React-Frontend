import axios from 'axios';

class UserClient {
	constructor() {
		this.userClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	getUserProfile(id) {
		return this.userClient.get(`/user/${id}/profile`).then(response => response.data);
	}

	getUserCreatedRecipesList() {
		return this.userClient.get(`/user/create`).then(({ data }) => data);
	}

	getUserCreateRecipe(body) {
		return this.userClient.post(`/user/create`, body).then((res )=> res.data);
	}

   getUserFavouriteList() {
		return this.userClient.get('/user/favourites').then(({ data }) => data);
	}

	UpdateRecipe(recipe) {
    const {id} = recipe._id
		return this.userClient.post(`/user/create/${id}`, recipe).then(response => response.data);
	}
  

};

const userClient = new UserClient();

export default userClient;
