import {
  errDiv,
  mainSection,
  repositorySelect,
  updateRepos,
} from './allVariables.js';
import { addRepoToSelectMenu } from './addRepoToSelectMenu.js';

// getting the options from the API

export function getOptions() {
  fetch('https://api.github.com/orgs/HackYourFuture/repos?per_page=100')
    .then((res) => res.json())
    .then((data) => {
      updateRepos(data);

      data.forEach((repo) => {
        addRepoToSelectMenu(repo);
      });
    })
    .catch((err) => {
      console.log(err);
      errDiv.classList.remove('changeable');
      errDiv.classList.add('err-div');
      mainSection.classList.add('changeable');
      repositorySelect.classList.add('changeable');
    });
}
