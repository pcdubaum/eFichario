import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChakraProvider,
  extendTheme,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import Home from './pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Perfil from './pages/Perfil';
import Inicio from './pages/Inicio';
import { UsuarioContextProvider } from './context/UsuarioContext';
import EditalCnu from './pages/EditalCnu';
import theme from './components/Styles';


function App() {
  return (
    <ChakraProvider theme={theme} >
    
    <div className="App">
    <UsuarioContextProvider>
      <BrowserRouter>
        <Routes>
       
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          
            <Route path='/usuario/perfil' element={<Perfil />} />
            <Route path='/usuario/inicio' element={<Inicio />} />

            <Route path='/editais/cnu/bloco2' element={<EditalCnu />} />            
        </Routes>
      </BrowserRouter>
      </UsuarioContextProvider>
    </div>
    </ChakraProvider>
  );
}

export default App;
