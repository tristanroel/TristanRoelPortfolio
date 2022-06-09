import React from 'react';
import { NavLink } from 'react-router-dom';
import ccvt from '../../assets/img/prtfl/Curriculum_Vitae.pdf'


const Apropos = () => {

   

    return (
        <div className='fullScreen2'>
            <div id='Apropos'>
                <div className='box0'></div>
                <div className='box rm'>

                    <div className='lign fff'></div>
                    <div className='lign ff'></div>
                    <div className='lign f'></div>
                    <div className='lign s'></div>
                    <div className='lign t'></div>
                    <div className='cptc right'><h3>↙ A &nbsp;P R O P O S</h3></div>

                    <div className='presentation'>
                        <div className='facectr'><div className='face'></div></div>
                        <div className='prsttn'>
                            <div className='prsnttntxt'>
                                <blockquote>
                                    <font size="5"> Bonjour à toutes et tous !</font> Je me Présente, Tristan Roel,
                                    <font size="4">Web Devellopeur Junior</font>, Passionné par le Devellopement Web, 
                                    de Design de Amateur en Pixel-Art<br/> Fraichement reconverti proffesionellement 
                                    j'aspire a reprendre en main mon parcourt, je vous invite à aller voir mes travaux 
                                    artistiques sur mes réseaux,  n'hésitez pas à me contacter 
                                </blockquote>
                            </div>
                        </div>
                        {/* <div style={{borderTop : '2px solid #6C76AC', height:'166px', width:'35px'}}></div>
                        <div className='prsttndeco'><div></div></div> */}
                    </div>
                    <div className='lign t'></div>
                    <div className='lign s'></div>
                    <div className='lign f'></div>
                    <div className='lign ff'></div>
                    <div className='lign fff'></div>
                    <div className='skills'>
                        {/* <p className='txtSpe '>FullStack</p>
                        <p className='txtSpe'>Web Design</p>
                        <p className='txtSpe'>Infographie</p> */}
                    </div>
                    <div className='lign fff'></div>
                    <div className='lign ff'></div>
                    <div className='lign f'></div>
                    <div className='lign s'></div>
                    <div className='lign t'></div>
                    
                    <div className='cptc'><h3>C O M P E T E N C E S  ↘</h3></div>
                    <div className='FBend frstbd'>
                        <div className='geek'></div>
                        <div className='fbnd'>
                            <div className='txtend'><h3>Front-End</h3></div>
                            <div className='frontlogos'>
                                <div title='Html' className='logos one'></div>
                                <div title='Css'className='logos two'></div>
                                <div title='JavaScript' className='logos three'></div>
                                <div title='Angular' className='logos four'></div>
                                <div title='React' className='logos five'></div>
                            </div>
                        </div>
                    </div>
                    <div className='FBend scdb'>
                        <div className='fbnd'>
                            <div><h3>Back-End</h3></div>
                            <div className='backlogos'>
                                <div title='Visual Studio' className='logos six '></div>
                                <div title='C#' className='logos seven'></div>
                                <div title='Sql' className='logos eight'></div>
                            </div>
                        </div>
                        <div className='geek2'></div>
                    </div>
                    <div className='FBend frstbd'>
                        <div className='geek'></div>
                        <div className='fbnd'>
                            <div className='txtend'><h3>Outils & Logiciels</h3></div>
                            <div className='frontlogos'>
                                <div title='PhotoShop' className='logos nine'></div>
                                <div title='Illustrator' className='logos ten'></div>
                                <div title='GitHub' className='logos eleven'></div>
                                <div title='Gimp' className='logos twelve'></div>
                                {/* <div className='logos thirteen'></div> */}
                            </div>
                        </div>
                    </div>
                    <div className='FBend lst'>
                      
                       <div className='txtcv'><div className='txtSpe'>CV &nbsp;→</div></div>
                     {/* <div className='txtcv'>  */}
                        {/* <NavLink to="/troel/curriculumVitae"> */}
                        <a href='https://drive.google.com/file/d/18smnudUdZ6KVNgwmjtfsl42rGfA-Dns_/view?usp=sharing'><div className='logos fourteen'></div></a>
                        {/* </NavLink> */}
                        {/* </div>   */}

                      
                        
                    </div>
                    <div className='lign t'></div>
                    <div className='lign s'></div>
                    <div className='lign f'></div>
                    <div className='lign ff'></div>
                    <div className='lign fff'></div>
                </div>
            </div>
        </div>
    );
};

export default Apropos;