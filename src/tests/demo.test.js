

describe('Pruebas en el archivo demo.test.js', () => {
     
    
    test('debe de ser iguales los string', () => {
        
        // 1. Inicialización
        const mensaje = 'Hola Mundo';
        
        // 2. estimulo
        const mensaje2 = `Hola Mundo`;
        
        // 3. Observar el Comportamiento
        expect( mensaje ).toBe(mensaje2); // ===
        
    })
    
});
    
    