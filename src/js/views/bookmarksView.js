import View from "./View.js";
import icons from "url:../../img/icons.svg";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = `  No bookmarks yet. Find a nice recipe and bookmark it :)`;

  addHandlerUpdateBookmarksView(handler) {
    window.addEventListener("hashchange", handler);
  }

  addHandlerAddBookmarksOnLoad(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    const markup = this._data
      .map((bookmark) => {
        return `
                    <li class="preview">
                        <a class="preview__link ${
                          bookmark.id === id ? "preview__link--active" : ""
                        }" href="#${bookmark.id}">
                          <figure class="preview__fig">
                            <img src="${bookmark.imageURL}" alt="${
          bookmark.title
        }" />
                          </figure>
                          <div class="preview__data">
                            <h4 class="preview__title">
                              ${bookmark.title} ...
                            </h4>
                            <p class="preview__publisher">${
                              bookmark.publisher
                            }</p>
                            <div class="preview__user-generated">
                            ${
                              bookmark.key
                                ? ` <svg>
                            <use href="${icons}#icon-user"></use>
                          </svg>`
                                : ""
                            }
                            </div>
                          </div>
                        </a>
                    </li>
        `;
      })
      .join("");

    return markup;
  }
}

export default new BookmarksView();
