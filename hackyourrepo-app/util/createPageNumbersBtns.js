import {
  numberOfPages,
  paginationItems,
  paginationNumbers,
  updateNumberOfPages,
} from './allVariables.js';
import { goToPage } from './goToPage.js';

export function createPageNumbersBtns() {
  //empty the div before refilling it
  paginationNumbers.innerHTML = '';

  updateNumberOfPages(Math.ceil(paginationItems.length / 5));

  //creates the page number buttons
  for (let i = 0; i < numberOfPages; i++) {
    const button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.innerText = i + 1;

    paginationNumbers.appendChild(button);
    button.addEventListener('click', () => goToPage(i));
  }
}
