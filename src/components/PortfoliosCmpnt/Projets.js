import React from 'react';
import { CSSProperties } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import{Carousel} from 'react-responsive-carousel';
import SndCld from './SndCld';
import { NavLink } from 'react-router-dom';

// export const withCustomStatusArrowsAndIndicators = () => {

//     export const centerMode = () => (
//         <Carousel
//             infiniteLoop
//             centerMode
//             centerSlidePercentage={number('centerSlidePercentage', 80, {}, mainGroupId)}
//             {...getConfigurableProps()}
//         >
//             {baseChildren.props.children}
//         </Carousel>
//     );
    

const Projets = (props) => {

    // const carrouselprops = {
    //     autoPlay : true
    // }
    return (
        <div className='contenu3 fullScreen'>
            <div className='prjt'>
            <div className='cptc right'><h3>↙ P R O J E T S</h3></div>
                <Carousel 
                //autoPlay="true" 
                //centerMode="true"
                emulateTouch="true"
                //interval={500}
                showStatus="false"
                showIndicators="false"
                showArrows="false"
                showThumbs="false"
                useKeyboardArrows="true"
                >
                    <div className='bloc'>
                        <div className='picbloc projuno'></div>
                        <div><a href='http://localhost:3000/magic'><h3 className='select'>▵ Le Bouton Magique ▵</h3></a></div>
                        <p>Bouton qui change la couleur de fond indéfiniment</p>
                        <div className='lglg'>
                            <img className='logosproj un'/>
                            <img className='logosproj deux'/>
                            <img className='logosproj trois'/>
                            <img className='logosproj quatre'/>
                        </div>
                    </div>
                    <div className='bloc'>
                        <div className='picbloc queud'></div>
                        <div><p>Projet 02</p></div>
                    </div>
                    <div className='bloc'>
                        <div className='picbloc queud'></div>
                        <div><p>Projet 03</p></div>
                    </div>
                    <div className='bloc'>
                        <div className='picbloc queud'></div>
                        <div><p>Projet 04</p></div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Projets;