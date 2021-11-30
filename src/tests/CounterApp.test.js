import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from "../CounterApp";


describe('Prueba en <CounterApp />', () => {
    
    test('Debe de mostrar <CounterApp /> correctamente', () => {
        
        
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();

    });

    
    test('Debe de mostrar el valor por defecto de 100', () => {
        
        // const value = 100;
        const wrapper = shallow(
            <CounterApp
            value={100}
            />
        );
            // trim borra espacios
        const textoHeader = wrapper.find('h2').text().trim();

        expect(textoHeader).toBe('100');

    }); 
    




    
})
