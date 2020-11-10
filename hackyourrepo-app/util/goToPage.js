import {
  next,
  numberOfPages,
  paginationItems,
  previous,
  updatePage,
} from './allVariables.js';
import { fillContributors } from './fillContributors.js';

export function goToPage(newPage) {
  updatePage(newPage);

  const start = newPage * 5;
  const end = start + 5;
  const itemsToShow = paginationItems.slice(start, end);

  // show next when more than one page and when we're not on the last page
  if (numberOfPages > 1 && numberOfPages !== newPage + 1) {
    next.style.display = 'block';
  } else {
    next.style.display = 'none';
  }
  // show previous when we're not on the first page.
  if (newPage > 0) {
    previous.style.display = 'block';
  } else {
    previous.style.display = 'none';
  }

  fillContributors(itemsToShow);
}
