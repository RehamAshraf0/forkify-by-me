import View from "./View.js";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _message = `The recipe has been successfully uploaded! :)`;

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _openBtn = document.querySelector(".nav__btn--add-recipe");
  _closeBtn = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this._addHandlerShowForm(this.toggleForm.bind(this));
    this.addHandlerHideForm(this.toggleForm.bind(this));
  }

  toggleForm() {
    console.log(this._window);

    this._window.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
  }

  _addHandlerShowForm(handler) {
    this._openBtn.addEventListener("click", handler);
  }

  addHandlerHideForm(handler = this.toggleForm.bind(this)) {
    this._closeBtn.addEventListener("click", handler);
  }

  addHandlerUploadRecipe(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = [...new FormData(this)];
      handler(formData);
    });
  }
}

export default new AddRecipeView();
