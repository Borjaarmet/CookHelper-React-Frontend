import axios from 'axios';

class RecipeClient {
	constructor() {
		this.recipeClient = axios.create({
			baseURL: "http://localhost:5000",
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
		return this.recipeClient.delete(`/recipes/favourites/${recipeId}`).then(({ data }) => data);
	}

	deleteRecipeCreated(id) {
		return this.recipeClient.delete(`/recipes/create/${id}`).then(({ data }) => data);
	}

	getUpdateRecipe(recipe) {
    const {recipeName, difficulty, TimeToCook, ingredientsList, Steps, videoLink} = recipe
    const {id} = recipe._id
		return this.recipeClient.post(`/recipes/${id}`, {recipeName, difficulty, TimeToCook, ingredientsList, Steps, videoLink}).then(response => response.data);
	}
};

const recipeClient = new RecipeClient();

export default recipeClient;
