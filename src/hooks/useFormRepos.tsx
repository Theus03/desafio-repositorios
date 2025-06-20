export default function useActionFormRepos() {
    const sectionFormAddRepos = document.getElementById('sectionFormAddRepos');
    const titleAllRepositories = document.getElementById('titleAllRepositories');
    const sectionRepos = document.getElementById('sectionRepos');
    const sectionReposFavorites = document.getElementById('sectionReposFavorites');
    const pagination = document.getElementById('sectionPagination');
    const btnAddRepository = document.getElementById('btnAddRepository');
    if (sectionFormAddRepos) {
      sectionFormAddRepos.classList.toggle('hidden');
      sectionRepos?.classList.toggle('hidden');
      sectionReposFavorites?.classList.toggle('hidden');
      pagination?.classList.toggle('hidden');
      titleAllRepositories?.classList.toggle('hidden');
      btnAddRepository?.classList.toggle('hidden');
    }
  }