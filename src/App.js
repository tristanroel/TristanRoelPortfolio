import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import '../src/styles/_settings.scss'
import Cv from './components/PortfoliosCmpnt/Cv';

import About from './pages/About';
import Home from './pages/Home';
import MagicButton from './pages/MagicButton';
import PortFolio from './pages/PortFolio';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         {/* "/" correspond a la page d'accueil par defaut */
         /* "*" fonctionne si l'url ne correspond à rien de déclaré */}
        <Route path="/"element={<Home/>}/> {/* path: indique la route, element : indique la page */}
        <Route path="*"element={<Home/>}/> 
        <Route path="/about"element={<About/>}/>
        <Route path="/magic"element={<MagicButton/>}/>
        <Route path="/troel/portfolio"element={<PortFolio/>}/>
        <Route path="/troel/curriculumVitae"element={<Cv/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;