import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
