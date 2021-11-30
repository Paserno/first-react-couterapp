import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Prueba en 05-funciones.js', () => {
    // cuando hay que compar en una prueba 2 objetos, es necesario usar .toEqual
    test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect( user ).toEqual(userTest);
    })

    //getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto ', () => {
        const nombre = 'pepe';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
        const user = getUsuarioActivo(nombre)

        expect( user ).toEqual(userTest);

    })
    


})
