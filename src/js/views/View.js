import icons from "url:../../img/icons.svg";

export default class View {
  _clear() {
    this._parentElement.innerHTML = "";
  }

  _insertMarkup(markup) {
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  renderSpinner() {
    this._clear();
    const markup = `
            <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
      `;
    this._insertMarkup(markup);
  }

  renderMessage(message = this._message) {
    this._clear();
    const markup = `
    <div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
    `;
    this._insertMarkup(markup);
  }

  renderError(message) {
    this._clear();
    const markup = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._insertMarkup(markup);
  }

  render(data) {
    if (Array.isArray(data) && data.length === 0)
      return this.renderError(this._errorMessage);
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._insertMarkup(markup);
  }

  update(data) {
    this._data = data;

    const markupString = this._generateMarkup();
    const newMarkup = document
      .createRange()
      .createContextualFragment(markupString);
    const newDOMEls = Array.from(newMarkup.querySelectorAll("*"));
    const curDOMEls = Array.from(this._parentElement.querySelectorAll("*"));

    newDOMEls.forEach((newEl, i) => {
      const curEl = curDOMEls[i];

      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim())
        curEl.textContent = newEl.textContent;

      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach((att) =>
          curEl.setAttribute(att.name, att.value)
        );
    });
  }
}
