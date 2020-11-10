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
    <div id="pagination" class="pagination">
      <button class="btn" id="previous" style="display: none;">Previous</button>
      <div id="pagination-numbers">

      </div>
      <button class="btn" id="next" style="display: none;">Next</button>
    </div>
  </div>
</section>
</div>`

export const repositorySelect = document.getElementById('select');
export const ul = document.getElementById('ul');
export const repositoryName = document.getElementById('repositoryName');
export const description = document.getElementById('description');
export const forks = document.getElementById('forks');
export const updated = document.getElementById('updated');
export const next = document.getElementById('next');
export const previous = document.getElementById('previous');
export const paginationNumbers = document.getElementById('pagination-numbers');
export let repos = [];
export let numberOfPages;

export let page = 0;
export let paginationItems = [];

// https://stackoverflow.com/a/53723394
export function updateNumberOfPages(num) {
  numberOfPages = num;
}

// https://stackoverflow.com/a/53723394
export function updatePage(newPage) {
  page = newPage;
}

// https://stackoverflow.com/a/53723394
export function updatePaginationItems(items) {
  paginationItems = items;
}

// https://stackoverflow.com/a/53723394
export function updateRepos(newRepos) {
  repos = newRepos;
}
