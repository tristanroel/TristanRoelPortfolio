import React from 'react';
import Navigation from '../components/Navigation';
import Bienvenuetxt from '../components/PortfoliosCmpnt/Bienvenuetxt';

const About = () => {
    return (
        <div>
            {/*  appel du composant Navigation */  }
            <Navigation></Navigation> 
            <h1>A Propos</h1>
            <br/>
            <Bienvenuetxt/>
        </div>
    );
};

export default About;