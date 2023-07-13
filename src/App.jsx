import './App.css'
import Home from './pages/Home'
import Breed from './pages/Breed'
import { HashRouter, Routes, Route } from 'react-router-dom'
import {home, raza} from './constants/constants'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path={home} element={<Home/>}></Route>
        <Route path={raza + ':id'} element={<Breed/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
