"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

function main() {
  document.body.innerHTML += `<div class="container">
        <header>
            <h4>HYF Repositories</h4>
            <select name="select" id="select">
              <option selected disabled>---Choose---</option>
            </select>
        </header>
        <section class="mainSection" id="mainSection">
          <div class="main-div">
            <section class="repoInfo" id="repoInfo">
                <div class="info-item">
                    <strong>Repository:</strong>
                    <a href="" id="repositoryName"></a>
                </div>
                <div class="info-item">
                    <strong>Description:</strong>
                    <span id="description"></span>
                </div>
                <div class="info-item">
                    <strong>Forks:</strong>
                    <span id="forks"></span>
                </div>
                <div class="info-item">
                    <strong>Updated:</strong>
                    <span id="updated"></span>
                </div>
            </section>
          </div>
          
          <div class="main-div">
            <section class="contributors">
              <h5>Contributors</h5>
              <ul id="ul"></ul>
            </section>
          </div>
        </section>
    </div>`
  const select = document.getElementById('select');
  select.addEventListener('change', selectChange);
  const ul = document.getElementById('ul');
  const repositoryName = document.getElementById('repositoryName');
  const description = document.getElementById('description');
  const forks = document.getElementById('forks');
  const updated = document.getElementById('updated');
  let repos;

  function getOptions() {
    fetch('https://api.github.com/orgs/HackYourFuture/repos?per_page=100')
      .then((res) => {
        res.json()
          .then((data) => {
            repos = data;

            data.forEach(repo => {
              let option = document.createElement('option');
              option.text = repo.name;
              option.value = repo.name;
              select.appendChild(option);
            });
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  getOptions()

  function selectChange(event) {
    const option = event.target.value;
    const repository = repos.find((repo) => repo.name === option);

    console.log(repository)
      // repo info
    repositoryName.innerText = repository.name;
    repositoryName.href = repository.clone_url;
    description.innerText = repository.description
    forks.innerText = repository.forks;
    updated.innerText = repository.updated_at;

    fetch(`https://api.github.com/repos/HackYourFuture/${option}/contributors`)
      .then((res) => {
        res.json()
          .then((contributors) => {
            ul.innerHTML = '';

            contributors.forEach(contributor => {
              // contributors
              let li = document.createElement('li');
              let div = document.createElement('div');
              div.setAttribute('class', 'contributor');

              let a = document.createElement('a');
              a.innerText = contributor.login;
              a.href = contributor.html_url

              let img = document.createElement('img');
              img.src = contributor.avatar_url;

              let span = document.createElement('span');
              span.setAttribute('class', 'contributions');
              span.innerText = contributor.contributions;

              div.appendChild(img);
              div.appendChild(a);
              div.appendChild(span);
              li.appendChild(div);
              ul.appendChild(li);
            });
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

main();
