import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MgcBtn() {
   let cpt = 0;
    let [cl, Setcl] = useState("rgb(000,000,000)");
   function returnRandomNumber(){
    let rdm = Math.random()* (255 - 0) + 0;
    let nbr = Math.trunc(rdm)
    return nbr
   }

    function changeColor(){
        let nbr1 ,nbr2, nbr3;
        let colorcode = 0;
        
            colorcode = returnRandomNumber()
            nbr1 = returnRandomNumber()
            nbr2 = returnRandomNumber()
            nbr3 = returnRandomNumber()    
        colorcode = "rgb("+nbr1+","+nbr2+","+nbr3+")";
        cpt = cpt + 1;
        document.getElementById('bckgrndbtn').style.backgroundColor=colorcode
        console.log(""+colorcode+"");
        Setcl(colorcode)
    }

    return (
        <div className='bckGrnd' id='bckgrndbtn'>
             <div className='infoColor' >{cl}</div>
            <NavLink to="/troel/portfolio">
                    <li>RETOUR</li>
                </NavLink>
            <div className='magicbutton'>
                <button id='LeBouton' onClick={changeColor}>
                
                    CLICK !
                </button>
            </div>
            
            
        </div>
    );
};


///ReactDOM.render(elem,document.getElementById('root'));


export default MgcBtn;