import axios from 'axios';

class RecipeClient {
	constructor() {
		this.recipeClient = axios.create({
			baseURL: "http://localhost:5000",
			withCredentials: true,
		});
	}

	getUserProfile(id) {
		return this.userClient.get(`/user/${id}/profile`).then(response => response.data);
	}

	getUpdateProfile(data) {
    const {username, email, nationality, age, cookLevel} = data
		return this.userClient.put('/user/profile', {username, email, nationality, age, cookLevel}).then(({ data }) => data);
	}

	getUserCreatedRecipesList() {
		return this.userClient.get(`/user/profile/create`).then(({ data }) => data);
	}

	getUserCreateRecipe(body) {
    const {recipeName, difficulty, TimeToCook, ingredientsList, Steps, videoLink} = body
		return this.recipeClient.post(`/user/profiloe/create`, {recipeName, difficulty, TimeToCook, ingredientsList, Steps, videoLink}).then(response => response.data);
	}

};

const recipeClient = new RecipeClient();

export default recipeClient;
