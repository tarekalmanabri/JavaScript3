// getting the options to the select dropdown

export function fillSelectMenu(repo) {
  let option = document.createElement('option');
  option.text = repo.name;
  option.value = repo.name;
  select.appendChild(option);
}
