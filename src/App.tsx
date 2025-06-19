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
      <RepositoryCard repo={repos} />
    </div>
  )
}

export default App
