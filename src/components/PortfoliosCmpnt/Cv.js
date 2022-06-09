import React from 'react';
import ccvt from '../../assets/img/prtfl/Curriculum_Vitae.pdf'

const Cv = () => {
    return (
        <div>
            <iframe className='cv' src={ccvt}>

            </iframe>
            
        </div>
    );
};

export default Cv;