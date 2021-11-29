import React from 'react';
import PropTypes from 'prop-types';

// Funcional Coponent React

const PrimeraApp = ( {saludo} ) => {

    

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>Mi Primer Parrafo</p>
        </>
    );
}
//! isRequired usar cuando es obligatorio el elemento
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;