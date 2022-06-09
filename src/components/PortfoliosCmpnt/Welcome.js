import React from 'react';
import rbt from '../../assets/img/prtfl/LeRobotTransparent.png';
import rbtWalk from '../../assets/img/prtfl/RobotWalkTransparent.gif';
import Bienvenuetxt from './Bienvenuetxt';
import BoutonThemePrtfl from './BoutonThemePrtfl';


const Welcome = () => {
    console.log('')
    //Rotation du Robot
    window.addEventListener('scroll',(event) =>{
       let scrollValue = window.scrollY
       console.log('valeur scrolling y : '+window.scrollY);
            if(scrollValue <= 10){
                document.getElementById('robotimg').src= rbtWalk ;
                document.getElementById('robotimg').style.marginLeft = "0px" ;
                
                // document.getElementById('robotimg').style.backgroundImage= "flex";
                // document.getElementById('robotimg').style.display= "none";

            }
            if(scrollValue > 0){
                document.getElementById('robotimg').src= rbt ;
                document.getElementById('robotimg').style.display = "flex" ;
            }

            if(scrollValue >= 26 || scrollValue>=733 && scrollValue<=833){
            console.log('yes')
            document.getElementById('robotimg').style.marginLeft = "0px" ;
            }
            if(scrollValue >= 26 && scrollValue <= 126 || scrollValue>=834 && scrollValue<=934){
            console.log('yes')
            document.getElementById('robotimg').style.marginLeft = "-380px" ;
            }
            if(scrollValue >= 127 && scrollValue <= 227 || scrollValue>=935 && scrollValue<=1035){
                console.log('yes')
                document.getElementById('robotimg').style.marginLeft = "-760px" ;
            }
            if(scrollValue >= 228 && scrollValue <= 328 || scrollValue>=1036 && scrollValue<=1136){
                console.log('yes')
                document.getElementById('robotimg').style.marginLeft = "-1140px" ;
            }
            if(scrollValue >= 329 && scrollValue <= 429 || scrollValue>=1137 && scrollValue<=1238){
                console.log('yes')
                document.getElementById('robotimg').style.marginLeft = "-1520px" ;
            }
            if(scrollValue >= 430 && scrollValue <= 530 || scrollValue>=1239 && scrollValue<=1339){
                console.log('yes')
                document.getElementById('robotimg').style.marginLeft = "-1900px" ;
            }
            if(scrollValue >= 531 && scrollValue <= 631 || scrollValue>=1340 && scrollValue<=1440){
                console.log('yes')
                document.getElementById('robotimg').style.marginLeft = "-2280px" ;
            }
            if(scrollValue >= 632 && scrollValue <= 732 || scrollValue>=1441 && scrollValue<=1541){
                console.log('yes')
                document.getElementById('robotimg').style.marginLeft = "-2660px" ;
                document.getElementById('robotimg').style.display = "flex" ;
                document.getElementById('robotimg').style.opacity="100%" ;


            }
            if(scrollValue >= 1552){
                document.getElementById('robotimg').style.opacity="50%" ;
            }
            if(scrollValue >= 1650){
                document.getElementById('robotimg').style.opacity="10%" ;
            }
            if(scrollValue >= 1750){
                document.getElementById('robotimg').style.opacity="0%" ;
            }
            

   })
   




    return (
        <div className='cover'>
            
             <div className='robot' draggable="false"><img draggable="false" id='robotimg' src={rbt}/></div>
             <div className='homeContent fullScreen'>
                 <div className='box0 home'></div>
                 <div className='box home'>
                    <BoutonThemePrtfl/>
                    <div className='box2'>
                        <div className='cube'></div>
                        <div className='center'><Bienvenuetxt/></div>
                    </div>
                    <div className='box2'>
                        <div className='osci'></div>
                        <div className='hometext'><p>salutation et bienvenue 
                        odidudyrh ifugygjbu ig ub efyfeb 
                         igjgugygef ajicuceg ehiduhe yxexjanu
                          </p></div>
                    </div>
                    <div className='box2'>
                        <div className='globe'></div>
                        <div className='hometext'>
                            <div className='hometext2'>
                                <div className='alignicon'>
                                    <div><a href='#'><div className='logosf lgi'></div></a></div>
                                    <div className='lgtxt'><p>Instagram</p></div>
                                </div>
                                <div className='alignicon'>
                                <div><a href='#'><div className='logosf lgl'></div></a></div>
                                    <div className='lgtxt'><p>Linkedin</p></div>
                                </div>
                                <div className='alignicon'>
                                <div><a href='#'><div className='logosf lgs'></div></a></div>
                                    <div className='lgtxt'><p>SoundCloud</p></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='boxlign'>
                        <div className='lign t'></div>
                        <div className='lign s'></div>
                        <div className='lign f'></div>
                        <div className='lign ff'></div>
                        <div className='lign fff'></div> 
                    </div>
                    
                </div>
             </div>
                 <div className='info'></div>
        
        </div>
       
    );
};

export default Welcome;