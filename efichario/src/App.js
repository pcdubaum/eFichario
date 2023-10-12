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

function App() {

  
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
          <Route path='/CRIARLEI' element={<CriarLei />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
