# Primeros pasos de React

* Para el uso de React es necesario hacer la Importación de este
````
import React from 'react';
````
### 1.- Un Ejemplo del uso de una función en React:
* En este caso podemos ver el primer Hola Mundo, el cual retorna un elemento **HTML**.
````
const PrimeraApp = () => {
    return <h1>Hola Mundo</h1>;
}
````
* Esta función es importada al archivo `index.js`, de este proyecto, la que luego hara la rederizacion, para hacer correr la demostración por pantalla.
````
import PrimeraApp from './PrimeraApp';
````
* Aquí una vez ya recibida la importacion, se hace referencia a un div existente con un **Id root**.
* Y luego recibir el elemento importado `<PrimeraApp />`, la cual sera renderizado y mostrado en el **div root**.
````
const divRoot =  document.querySelector('#root');

ReactDOM.render( <PrimeraApp /> ,divRoot);
````
#
* Una forma de retornar mas de un elemento HTML en la función creada **PrimeraApp**, es encerrarlos en un `<div>`, de esta forma sera posible mostrar por pantalla mas de un elemento.
````
const PrimeraApp = () => {
    return (
        <div>
            <h1>Hola Mundo</h1>
            <p>Mi Primer Parrafo</p>
        </div>
    );
}
````

* Como alternativa a este se tiene el elemento `<Fragment>`, este evitara que se cree un elemento **div** adicional, que quizas no se use.
* **No olvidar importar** el elemnto `<Fragment>`, ejemplo: `import React,{ Fragment } from 'react';`

````
    return (
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi Primer Parrafo</p>
        </Fragment>
    );
````
* Altrernativa al uso de `<div></div>`, con `<></>` sin ningun elemento interno.
* Esta no necesita importaciones.
````
return (
        <>
            <h1>Hola Mundo</h1>
            <p>Mi Primer Parrafo</p>
        </>
    );
````
#
