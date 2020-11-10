export function fillRepositoryInfo(repository) {
  repositoryName.innerText = repository.name;
  repositoryName.href = repository.clone_url;
  description.innerText = repository.description
  forks.innerText = repository.forks;
  updated.innerText = repository.updated_at;
}
