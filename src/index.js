import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';




const divRoot =  document.querySelector('#root');
//<PrimeraApp saludo="Hola mundo"/> 
ReactDOM.render( <CounterApp value={0}/>,divRoot);

