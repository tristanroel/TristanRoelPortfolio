import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")}> {/* fonction flechee + ternaire, injecte le css quand le lien est actif  */}
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A PROPOS</li>
                </NavLink>
                <NavLink to="/magic">
                    <li>MAGIC BTN</li>
                </NavLink>
                <NavLink to="/troel/curriculumVitae">
                    <li>C V</li>
                </NavLink>
                <NavLink to="/troel/portfolio">
                    <li>PORTFOLIO</li>
                </NavLink>
                
            </ul>
        </div>
    );
};

export default Navigation;