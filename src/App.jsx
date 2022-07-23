import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import PokemonDetails from './components/PokemonDetails'
import SelectAvatar from './components/SelectAvatar'
import WelcomePage from './components/WelcomePage'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/select-avatar" element={<SelectAvatar />} />
          <Route element={<MainLayout/>}>
            <Route path="/pokedex" element={<Home />} />
            <Route path="/pokedex/:id" element={<PokemonDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
