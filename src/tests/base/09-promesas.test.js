import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas con promesas', () => {
    // Para tareas asincronas es necesario mandar un done "callback"
    jest.setTimeout(7000);
    test('getHeroeByIdAsync debe de retornar un Heroe async', ( done ) => {
        const id = 1;
        
        getHeroeByIdAsync(id)
            .then(h => {
                expect(h).toBe(heroes[0]);
                done();
            });
    });


    test('Debe de obtener un error si el Heroe por id no existe', (done) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( error => {

                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });

    });
    
    



})
