import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";


describe('Prueba en <PrimeraApp />', () => {
    
    test('debe de mostrar el mensaje "Hola, soy Paserno" ', () => {
        
        const saludo = 'Hola, soy Paserno';

        const {getByText} = render(<PrimeraApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
    });
    
    
})
