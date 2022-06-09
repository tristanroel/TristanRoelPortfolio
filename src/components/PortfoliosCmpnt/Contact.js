import React from 'react';

const Contact = () => {
    return (
        <div className='contenu2 fullScreen' id='LeContact'>

            <div className='prjt'>
            <div className='lign fff'></div>
                    <div className='lign ff'></div>
                    <div className='lign f'></div>
                    <div className='lign s'></div>
                    <div className='lign t'></div>
                <div className='cptc'><h3>C O N T A C T</h3></div>
                {/* <div className='infoPerso'> */}
                <a href='mailto:tristanroel@outlouk.com'><div className='infoContact linkmail'><div className='logocontact quattro'></div>tristanroel@outlook.com</div></a>  
                    <div className='infoContact'><div className='logocontact cinquo'></div><p>(+32)474/28.17.48</p></div>
                    <div className='infoContact'>
                        <a title='Instagram' href='https://www.instagram.com/tristanroel/'><div className='logocontact uno'></div></a>
                        <a title='SoundCloud' href='https://soundcloud.com/t-roel'><div className='logocontact dos'></div></a>
                        <a title='Linkedin' href='https://www.linkedin.com/in/tristan-roel-b1035a184'><div className='logocontact tres'></div></a>
                    </div>
                    <div className='foot'><p>Copyright 2021 - All rights reserved - Tristan Roel</p></div>
                    
                {/* </div> */}
            </div>

        </div>
        
    );
};

export default Contact;