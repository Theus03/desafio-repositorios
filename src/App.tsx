import './App.css'
import Navbar from './components/Navbar'
import RepositoryCard from './components/RepositoryCard'


function App() {

  let repos = {
    owner: {
      login: "Theus03"
    }, 
    name: "Desafio Técnico",
    description: "Teste com C# com intuito de colocar em práticas meus estudos."
  }

  return (
    <div>
      <Navbar />
        <h2 className='text-2xl font-bold text-start ml-4'>Todos os Repositórios</h2>
        <RepositoryCard repo={repos} />
    </div>
  )
}

export default App
