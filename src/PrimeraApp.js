import React from 'react';
import PropTypes from 'prop-types';

// Funcional Coponent React

const PrimeraApp = ( {saludo, subtitulo} ) => {

    

    return (
        <>
            <h1>{ saludo }!</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}
//! isRequired usar cuando es obligatorio el elemento
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;