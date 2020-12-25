import React from 'react';

export default class Game extends React.Component{
     return ( 
     <button className="square" onClick={props.onClick}>
     {props.value}
     </button>
 );
    
}