import React from 'react';

const Test = (props) => {

    console.log(props.children) //retourne l'element qui se trouve dans la balise Test

    return (
        <div>
            <p>Pouet</p>
            <p>Pouet</p>
        </div>
    );
};

export default Test;