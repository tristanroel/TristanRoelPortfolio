import React from 'react';
document.getElementById('thmBtn')
document.getElementById("root").style.backgroundColor="#2D3443"
function bisqueTheme(){document.getElementById("root").style.backgroundColor="bisque"}
function whiteTheme(){document.getElementById("root").style.backgroundColor="white"}
function pinkTheme(){document.getElementById("root").style.backgroundColor="#F6BEBE"}
function yellowTheme(){document.getElementById("root").style.backgroundColor="#f9CC76"}
function greenTheme(){document.getElementById("root").style.backgroundColor="#C6C9A8"}
function darkTheme(){document.getElementById("root").style.backgroundColor="#2D3443"}

const BoutonThemePrtfl = () => {
    return (
        <div className='prtflbtnthm'>
            <button className='thmbtn' id='thmBtn' onClick={bisqueTheme}>bisque</button>
            <button className='thmbtn' id='thmBtn' onClick={whiteTheme}>white</button>
            <button className='thmbtn' id='thmBtn' onClick={pinkTheme}>pink</button>
            <button className='thmbtn' id='thmBtn' onClick={yellowTheme}>yellow</button>
            <button className='thmbtn' id='thmBtn' onClick={greenTheme}>green</button>
            <button className='thmbtn' id='thmBtn' onClick={darkTheme}>dark</button>
        </div>
    );
};

export default BoutonThemePrtfl;