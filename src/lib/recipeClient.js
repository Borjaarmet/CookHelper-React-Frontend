import axios from 'axios';

class RecipeClient {
	constructor() {
		this.recipeClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	getAllRecipes() {
		return this.recipeClient.get('/recipes').then(response => response.data);
	}

	getRecipeDetails(id) {
		return this.recipeClient.get(`/recipes/${id}/details`).then(({ data }) => data);
	}

	pushRecipeToFav(id) {
		return this.recipeClient.post(`/recipes/${id}/details`).then(({ data }) => data);
	}

	deleteRecipeFromFav(recipeId) {
		return this.recipeClient.put(`/recipes/favourites/${recipeId}`).then(({ data }) => data);
	}

	deleteRecipeCreated(id) {
		return this.recipeClient.put(`/recipes/create/${id}`).then(({ data }) => data);
	}
};

const recipeClient = new RecipeClient();

export default recipeClient;
