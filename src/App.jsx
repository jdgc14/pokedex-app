import { useSelector } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import PokemonDetails from './components/PokemonDetails'
import PokemonNotFound from './components/PokemonNotFound'
import SelectAvatar from './components/SelectAvatar'
import TrainerProfile from './components/TrainerProfile'
import WelcomePage from './components/WelcomePage'

function App() {

  const isDark = useSelector(state => state.user.isDarkMode)

  console.log(isDark)

  return (
    <div className={`App ${isDark? 'bg-prima-dark paragraph-white':'bg-secon'}`}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/select-avatar" element={<SelectAvatar />} />
          <Route element={<MainLayout/>}>
            <Route path="/pokedex" element={<Home />} />
            <Route path="/pokedex/:id" element={<PokemonDetails />} />
            <Route path="/pokedex/not-found" element={<PokemonNotFound />} />
            <Route path="/pokedex/profile" element={<TrainerProfile />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
