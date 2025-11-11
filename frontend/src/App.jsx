import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Play from './pages/Play'

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  )
}

export default App
