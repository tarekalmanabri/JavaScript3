import { repos, updatePaginationItems } from './allVariables.js';
import { fillRepositoryInfo } from './fillRepositoryInfo.js';
import { goToPage } from './goToPage.js';
import { createPageNumbersBtns } from './createPageNumbersBtns.js';

//we press the an option from the select menu to change to that repository.

export function changeRepository(event) {
  const option = event.target.value;
  const repository = repos.find((repo) => repo.name === option);

  fillRepositoryInfo(repository);

  fetch(`https://api.github.com/repos/HackYourFuture/${option}/contributors`)
    .then((res) => res.json())
    .then((contributors) => {
      updatePaginationItems(contributors);
      // sets the pagination numbers
      createPageNumbersBtns(contributors);
      goToPage(0);
    })

    .catch((err) => {
      console.log(err);
    });
}
