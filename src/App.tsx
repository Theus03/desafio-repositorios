import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RepositoryCard from './components/RepositoryCard';
import AddRepository from './components/AddRepository';
import  useActionFormRepos  from './hooks/useFormRepos';

function App() {
  interface RepoData {
    id: number;
    name: string;
    description: string;
    language: string;
    updated_at: string;
    owner: {
      login: string;
    };
  }

  const [repo, setRepo] = useState<RepoData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 10;

  useEffect(() => {
    const username = "Theus03";
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRepo(data);
      })
      .catch(err => console.error("Erro ao buscar repositório:", err));
  }, []);

  const totalPages = Math.ceil(repo.length / reposPerPage);
  const startIndex = (currentPage - 1) * reposPerPage;
  const currentRepos = repo.slice(startIndex, startIndex + reposPerPage);

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-between'>
        <h2 id='titleAllRepositories' className='text-2xl font-bold text-start ml-4'>Todos os Repositórios</h2>
        <button id="btnAddRepository" className="mr-4 inline-flex items-center gap-2 text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-md transition duration-200" onClick={() => useActionFormRepos()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" />
          </svg>
          Criar Repositório
        </button>
      </div>
      <div id="sectionRepos" className="p-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {currentRepos.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div id="sectionPagination" className="flex justify-end gap-4 mt-4">
        <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
          Anterior
        </button>
        <span className="px-4 py-2">Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
      <div id="sectionReposFavorites" className="p-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <h2 className='text-2xl font-bold text-start ml-4'>Meus Favoritos</h2>
      </div>
      <div id='sectionFormAddRepos' className='hidden'>
        <AddRepository/>
      </div>
    </div>
  );
}

export default App;
