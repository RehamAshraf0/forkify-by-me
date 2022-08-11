import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import * as model from "./model.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import addRecipeView from "./views/addRecipeView.js";
import { CLOSE_MODAL_SEC } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const handleRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    resultsView.update(model.getSearchResultsForPage());

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    console.log(model.state.recipe);

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

const handleSearch = async function () {
  try {
    // render spinner
    resultsView.renderSpinner();

    // get the search query from the searchView object
    const query = searchView.getQuery();

    if (!query) return resultsView.renderError(`Please type a search query!`);

    // load the corresponding search results and inject it into the state object in the model
    await model.loadSearchResults(query);

    // render the search results
    resultsView.render(model.getSearchResultsForPage());

    // render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const handlePagination = function (goToPage) {
  // Render the corresponding search results to the given page
  resultsView.render(model.getSearchResultsForPage(goToPage));

  // Render Pagination Buttons
  paginationView.render(model.state.search);
};

const handleServings = function (newServings) {
  model.updateServings(newServings);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const handleBookmarks = function () {
  if (!model.state.recipe.bookmarked) model.makeCurrentRecipeBookmarked();
  else model.unbookmarkCurrentRecipe();
  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
};

const handleBookmarksFromLocalStorage = function () {
  bookmarksView.render(model.state.bookmarks);
};

const handleBookmarksList = function () {
  bookmarksView.update(model.state.bookmarks);
};

const handleUploadingRecipe = async function (formData) {
  addRecipeView.renderSpinner();

  await model.uploadRecipe(formData);

  addRecipeView.renderMessage();

  setTimeout(function () {
    addRecipeView.toggleForm();
  }, CLOSE_MODAL_SEC * 1000);

  recipeView.render(model.state.recipe);
};

const init = function () {
  bookmarksView.addHandlerAddBookmarksOnLoad(handleBookmarksFromLocalStorage);
  bookmarksView.addHandlerUpdateBookmarksView(handleBookmarksList);
  recipeView.addHandlerRender(handleRecipe);
  recipeView.addHandlerServings(handleServings);
  recipeView.addHandlerBookmark(handleBookmarks);
  searchView.addHandlerSearch(handleSearch);
  paginationView.addHandlerPagination(handlePagination);
  addRecipeView.addHandlerUploadRecipe(handleUploadingRecipe);
};

init();
