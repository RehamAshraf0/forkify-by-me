class SearchView {
  _parentElement = document.querySelector(".search");
  _inputField = this._parentElement.querySelector(".search__field");

  _clearInput() {
    this._inputField.value = "";
  }

  getQuery() {
    const query = this._inputField.value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
