import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = this._data.numOfPages;

    // if some middle page and there're other pages before and after
    if (curPage > 1 && curPage < numPages)
      return `
      <button class="btn--inline pagination__btn--prev" data-goto="${
        curPage - 1
      }">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
     <button class="btn--inline pagination__btn--next" data-goto="${
       curPage + 1
     }">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;

    // if the last page and there're previous pages
    if (curPage === numPages && numPages > 1)
      return `
      <button class="btn--inline pagination__btn--prev" data-goto="${
        curPage - 1
      }">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;

    // if page 1 and there's more pages
    if (curPage === 1 && numPages > 1)
      return `
    <button class="btn--inline pagination__btn--next" data-goto="${
      curPage + 1
    }">
    <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
      </svg>
      </button>`;
    // if page 1 and there's no other pages
    return "";
  }

  addHandlerPagination(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
