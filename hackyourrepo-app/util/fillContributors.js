import { ul } from './allVariables.js';

// filling the contribution section when we choose a repository.
export function fillContributors(contributors) {
  ul.innerHTML = '';

  contributors.forEach((contributor) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.setAttribute('class', 'contributor');

    const a = document.createElement('a');
    a.innerText = contributor.login;
    a.href = contributor.html_url;

    const img = document.createElement('img');
    img.src = contributor.avatar_url;

    const span = document.createElement('span');
    span.setAttribute('class', 'contributions');
    span.innerText = contributor.contributions;

    div.appendChild(img);
    div.appendChild(a);
    div.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);
  });
}
