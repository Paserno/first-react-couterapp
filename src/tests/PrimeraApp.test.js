import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import PrimeraApp from "../PrimeraApp";


describe('Prueba en <PrimeraApp />', () => {
    
    // test('debe de mostrar el mensaje "Hola, soy Paserno" ', () => {
        
    //     const saludo = 'Hola, soy Paserno';

    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo  = 'Hola, soy Paserno';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props ', () => {
        
        const saludo    = 'Hola, soy Paserno';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo}
            subtitulo={subTitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);

    });
    
    
    
});
