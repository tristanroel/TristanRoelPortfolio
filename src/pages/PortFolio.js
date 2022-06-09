import React from 'react';
import Apropos from '../components/PortfoliosCmpnt/Apropos';
import Contact from '../components/PortfoliosCmpnt/Contact';
import NavBar from '../components/PortfoliosCmpnt/NavBar';
import NavBar2 from '../components/PortfoliosCmpnt/NavBar2';
import Projets from '../components/PortfoliosCmpnt/Projets';
import TexteDeroulant from '../components/PortfoliosCmpnt/TexteDeroulant';
import Welcome from '../components/PortfoliosCmpnt/Welcome';

const PortFolio = () => {

   

    return (
        <div className='contenu'>
            <NavBar/>
            <NavBar2/>
            <Welcome/>
            <TexteDeroulant/>
            <Apropos/>
            <div className='trs'><div className='transi transi1'></div></div>
            <div id='projets'></div>
            <Projets/>
            <div className='spaceb'></div>
            <div className='trs'><div className='transi transi2'></div></div>

            <Contact/>
            <div className='tramecolle'></div>
        </div>
    );
};

export default PortFolio;