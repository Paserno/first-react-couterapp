import React from 'react';

// Funcional Coponent React

const PrimeraApp = () => {

    const saludo = 'Hola Mundo';
// Si no se quiere agregar un elemento <div>, utilizar <Fragment>
    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>Mi Primer Parrafo</p>
        </>
    );
}


export default PrimeraApp;