import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

// hooks
import Home from './components/Home';
import Crase from './pages/Crase';
import Acentuacao from './pages/Acentuacao';
import LerLei from './pages/LerLei';
import Cursos from './pages/Cursos';
import CriarLei from './pages/CriarLei';
import CNU from './pages/concursos/CNU'

function App() {

  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Home />
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/crase' element={<Crase />} />
          <Route path='/acentuacao' element={<Acentuacao />} />
          <Route path='/lerlei/:id' element={<LerLei />} />
          <Route path='/postarLei' element={<LerLei />} />
          <Route path='/cursos' element={<Cursos />} />
          <Route path='/criarlei' element={<CriarLei />} />
          <Route path='/consursos/cnu' element={<CNU />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
