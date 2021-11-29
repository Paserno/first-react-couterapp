# Primeros pasos de React 👣

* Para el uso de React es necesario hacer la Importación de este
````
import React from 'react';
````
### 1.- Un Ejemplo del uso de una función en React:
* En este caso podemos ver el primer Hola Mundo, el cual retorna un elemento **HTML**. 👋
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
### Impresion de Variables
* Declaramos nuestra Variable `saludo`.
````
const saludo = 'Hola Mundo';
````
* Para luego imprimir nuesto **Hola Mundo** por pantalla.
````
<h1>{ saludo }</h1>
````
#
### 2.- Comunicación entre componentes:
* Como primer paso podemos enviar una variable en el `<PrimeraApp />`, en este caso **saludo**.
````
ReactDOM.render( <PrimeraApp saludo='Hola Mundo' /> ,divRoot);
````
* Para luego recibir la propiedad `props`, o existe una alternativa ...
````
const PrimeraApp = ( props ) => {
````
* Desestructurar el elemento **props**, y obtener el elemento que se envio del **index.js** - **ReactDOM.render()**
````
const PrimeraApp = ( {saludo} ) => {
````
* Y luego utilizar el elemento.
````
<h1> { saludo } </h1>
````
#
### 3.- Prop Types:
Para intentar que el usuario mande algun argumento en el **prop** de nuestro componente, se pude hacer validaciones, con un if, pero para el caso que se quiera ahorrar recursos se puede utilizar un elemento...
* Este elemento es el PropTypes, para eso es necesario su importacion.
````
import PropTypes from 'prop-types';
````
* Luego lo utilizamos, en este caso intentaremos recibir un **String**
````
PrimeraApp.propTypes = {
    saludo: PropTypes.string
}
````
* En el caso que necesitemos obligatoriamente recibir un argumento, utilizaremos el `.isRequired`, mandando un error (Warning).
````
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
````
#
### 4.- Default Props:
En el caso que tengamos una propiedad, que necesitemos que tenga un valor por defecto, tenemos 2 opciones...
* La forma comun o tradicional de asignar un valor por defecto.
````
const PrimeraApp = ( {saludo, subtitulo = 'Soy un subtitulo'} ) => {
````
* La otra manera de hacerlo es con `.defaultProps`.
* Tambien saldrian en los "components" **props**, a diferencia de la opcion anterior
````
PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo'
}
````
#
### 5.- ABCDE:
