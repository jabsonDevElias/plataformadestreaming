// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modulos/Home';
import Filme from './modulos/Filme';
import SobreConteudo from './modulos/SobreConteudo.js';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/filmes" element={<Filme/>} />
         <Route path="/conteudo/:tipo/:idfilme" element={<SobreConteudo/>}/>
      </Routes>
    </Router>
  );
};

export default App;
