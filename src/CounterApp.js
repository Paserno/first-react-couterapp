import React,{useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter,setCounter] = useState(value); // []



    //handleAdd
    const handleAdd = (e) =>{
        setCounter(counter + 1);
        //? Por si no tengo acceso a "counter"
        // setCounter((c) => c + 1 );
    }

    const handleReset = (e) =>{
        setCounter(value);
    }

    const handleSubtract = (e) =>{
        setCounter(counter - 1);
    }

return (
    <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/*  onClick={(e)=> {handleAdd(e)}} */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
    </>
);
}
CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;