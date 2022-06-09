import React from 'react';
import Navigation from '../components/Navigation';
import Test from './Test';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1>Accueil</h1>

            <Test>TicTacBoom !!!</Test>
            
        </div>
    );
};

export default Home;