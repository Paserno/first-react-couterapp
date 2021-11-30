import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    
    test('Debe de retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar un undefined si Heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect(heroe).toBe( undefined );
    });
    

    // getHeroesByOwner
    test('Debe de retornar un arreglo con los Heroes de DC', () => {
        
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        const heroeData = heroes.filter(h => h.owner === owner)
        
        expect(heroe).toEqual( heroeData );
    });


    test('Debe de retornar un arreglo con los Heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        // const heroeData = heroes.length('owner');
       
        // console.log(heroeData.length);

       
         expect(heroes.length).toBe( 2 );
    });
})
