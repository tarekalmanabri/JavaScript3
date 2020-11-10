import { getOptions } from './util/getOptions.js';
import { changeRepository } from './util/changeRepository.js';
import { page, next, previous, repositorySelect } from './util/allVariables.js';
import { goToPage } from './util/goToPage.js';

function main() {
  repositorySelect.addEventListener('change', changeRepository);

  previous.addEventListener('click', () => goToPage(page - 1));
  next.addEventListener('click', () => goToPage(page + 1));

  getOptions();
}

main();
