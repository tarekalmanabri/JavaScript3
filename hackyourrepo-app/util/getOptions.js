import { updateRepos } from "./allVariables.js";
import { fillSelectMenu } from "./fillSelectMenu.js";

// getting the options from the API

export function getOptions() {
  fetch('https://api.github.com/orgs/HackYourFuture/repos?per_page=100')
    .then((res) => {
      res.json()
        .then((data) => {
          updateRepos(data)

          data.forEach(repo => {
            fillSelectMenu(repo)
          });
        })
    })
    .catch((err) => {
      console.log(err)
    })
}
