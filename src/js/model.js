import { API_URL, KEY, RES_PER_PAGE } from "./config";
import { getJSON, AJAX } from "./helpers";

export const state = {
  recipe: {},
  search: {
    numOfResults: 0,
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
    numOfPages: 1,
  },
  bookmarks: [],
};

const formatRecipeObject = function (recipeObj) {
  recipe = {
    cookingTime: recipeObj.cooking_time,
    id: recipeObj.id,
    imageURL: recipeObj.image_url,
    ingredients: recipeObj.ingredients,
    publisher: recipeObj.publisher,
    servings: recipeObj.servings,
    sourceURL: recipeObj.source_url,
    title: recipeObj.title,
    ...(recipeObj.key && { key: recipeObj.key }),
  };
  return recipe;
};

export const loadRecipe = async function (id) {
  const data = await AJAX(`${API_URL}/${id}?key=${KEY}`);
  const { recipe } = data.data;

  state.recipe = formatRecipeObject(recipe);

  console.log(state.bookmarks);

  state.recipe.bookmarked = state.bookmarks.some(
    (bookmark) => bookmark.id === state.recipe.id
  );
};

export const loadSearchResults = async function (query) {
  const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
  console.log();

  state.search.results = data.data.recipes.map((rec) => {
    return {
      id: rec.id,
      imageURL: rec.image_url,
      publisher: rec.publisher,
      title: rec.title,
      ...(rec.key && { key: rec.key }),
    };
  });
  state.search.numOfResults = data.results;
  state.search.numOfPages = Math.ceil(
    state.search.numOfResults / state.search.resultsPerPage
  );
  state.search.page = 1;
};

export const getSearchResultsForPage = function (page = state.search.page) {
  state.search.page = page;
  const startIndex = (page - 1) * state.search.resultsPerPage;
  const endIndex = page * state.search.resultsPerPage;

  return state.search.results.slice(startIndex, endIndex);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(
    (ing) =>
      (ing.quantity = ing.quantity * (newServings / state.recipe.servings))
  );
  state.recipe.servings = newServings;
};

export const makeCurrentRecipeBookmarked = function () {
  state.bookmarks.push(state.recipe);
  state.recipe.bookmarked = true;
  updateLocalStorage();
};

export const unbookmarkCurrentRecipe = function () {
  const index = state.bookmarks.findIndex(
    (bookmark) => bookmark.id === state.recipe.id
  );
  state.bookmarks.splice(index, 1);
  state.recipe.bookmarked = false;
  updateLocalStorage();
};

const updateLocalStorage = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

const getLocalStorage = function () {
  const storage = JSON.parse(localStorage.getItem("bookmarks"));
  if (storage) state.bookmarks = storage;
};

getLocalStorage();

export const uploadRecipe = async function (formData) {
  console.log(state.recipe);

  const recievedRecipeObject = Object.fromEntries(formData);
  console.log(recievedRecipeObject);

  // extracting & formatting ingredients
  const ingredients = formData
    .filter((el) => el[0].startsWith("ingredient-") && el[1])
    .map((el) => {
      const [quantity, unit, description] = el[1].split(",");

      return {
        quantity: quantity ? +quantity : null,
        unit,
        description,
      };
    });

  // Formatting recipe object that will be send to the API
  const recipe = {
    title: recievedRecipeObject.title,
    image_url: recievedRecipeObject.image,
    publisher: recievedRecipeObject.publisher,
    servings: recievedRecipeObject.servings,
    source_url: recievedRecipeObject.sourceUrl,
    cooking_time: recievedRecipeObject.cookingTime,
    ingredients,
  };

  // upload the recipe to the API
  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);

  console.log(`💥💥`, data);

  // make the current recipe the uploaded recipe
  state.recipe = formatRecipeObject(data);

  console.log(state.recipe);
};
