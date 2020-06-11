import React from 'react';

function Greetings(props){
    return(
    <div>
        <h1>Hello World By {props.name}</h1>
        <h2>React is a {props.language } library.</h2>
    </div>
    )
}


export default Greetings