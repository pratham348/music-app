import './App.css'
import Login from './views/auth/login'
import { Routes, Route } from "react-router-dom"
import ArtistList from './views/artist/ArtistList'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/artist" element={<ArtistList />} />
    </Routes>
  )
}

export default App
