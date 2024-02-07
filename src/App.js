// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modulos/Home';
import Filme from './modulos/Filme';
import Usuario from './modulos/usuario/Usuario';
import SobreConteudo from './modulos/conteudo/SobreConteudo.js';
import Series from './modulos/Serie.js';
import Watchnow from './modulos/conteudo/Assistir.js'

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/filmes" element={<Filme/>} />
         <Route path="/series" element={<Series/>} />
         <Route path="/perfil" element={<Usuario/>} />
         <Route path="/conteudo/:tipo/:idfilme" element={<SobreConteudo/>}/>
         <Route path="/watchnow/:tipo/:imdb" element={<Watchnow/>} />
      </Routes>
    </Router>
  );
};

export default App;
