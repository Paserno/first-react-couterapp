

> __Elemento Anterior 馃憖:__ __[Reforzar JS 馃挭](https://github.com/Paserno/recordatorio-JS)__

<br>


# CounterApp 
Esta es la primera aplicaci贸n de React. Recordar que si se desea ejecutar esta aplicaci贸n, deben de reconstruir los m贸dulos de node as铆:
````
npm install
````
Y luego para hacerla correr.
````
npm start
````
<br>



# Primeros pasos de React 馃懀

* Para el uso de React es necesario hacer la Importaci贸n de este
````
import React from 'react';
````
### 1.- Un Ejemplo del uso de una funci贸n en React:
* En este caso podemos ver el primer Hola Mundo, el cual retorna un elemento **HTML**. 馃憢
````
const PrimeraApp = () => {
    return <h1>Hola Mundo</h1>;
}
````
* Esta funci贸n es importada al archivo `index.js`, de este proyecto, la que luego hara la rederizacion, para hacer correr la demostraci贸n por pantalla.
````
import PrimeraApp from './PrimeraApp';
````
* Aqu铆 una vez ya recibida la importacion, se hace referencia a un div existente con un **Id root**.
* Y luego recibir el elemento importado `<PrimeraApp />`, la cual sera renderizado y mostrado en el **div root**.
````
const divRoot =  document.querySelector('#root');

ReactDOM.render( <PrimeraApp /> ,divRoot);
````
#
* Una forma de retornar mas de un elemento HTML en la funci贸n creada **PrimeraApp**, es encerrarlos en un `<div>`, de esta forma sera posible mostrar por pantalla mas de un elemento.
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
### 2.- Comunicaci贸n entre componentes:
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
### 5.- Evento Click :
Creamos un boton en el `return` de la funcion.
* Este evento le agregamos una funcion que retorna una impresion por consola.
````
<button onClick={ console.log('+1')}>+1</button>
````
* Ademas podemos agregarle funcionalidad, dentro del evento **onClick**.
````
const handleAdd = (e) =>{
        console.log(e)
    }
````
* Equivalente a :`onClick={(e)=> {handleAdd(e)}}`
````
<button onClick={ handleAdd }>+1</button>
````
#
### 6.- Hooks useState 馃帲: 
En este ejemplo haremos una renderizacion de un boton con useState (incrementando un valor).
- Creando un useState, inicializado en 0
````
const [counter,setCounter] = useState(0);
````
- Ingresamos nuestra propiedad __setCounter__ en nuestra funcion anteriormente creada.
````
const handleAdd = (e) =>{
        setCounter(counter + 1);
}
````
- Ingresamos nuestra variable en un elemento html, para que se pueda visualizar.
````
<h2>{counter}</h2>
````
- Luego vemos nuestro boton que tiene la funcion en el __onClick__, la cual realizara el incremento del valor.
````
<button onClick={ handleAdd }>+1</button>
````
De esta forma conseguimos un incremento del valor inicial de `useState(0)`.
#
### 7.- TAREA handleSubtract - handleReset:
Con el uso de useState del punto anterior, se realizo un incriemento del valor inicial que era 0, en esta ocasi贸n se realizo un decremento y un reset del valor.
- Para esto dejamos asignado el `value` en el numero que queramos en este caso __0__.
````
ReactDOM.render( <CounterApp value={0}/>,divRoot);
````
- Luego le pasamos el valor que recibimos al ___useState__, en este caso es __"value"__.
````
const CounterApp = ({value}) => {

    const [counter,setCounter] = useState(value); // []
...
````
- En este paso creamos los botones adicionales.
````
<button onClick={ handleAdd }>+1</button>
<button onClick={ handleReset }>Reset</button>
<button onClick={ handleSubtract }>-1</button>
````
- Y las funciones __handleReset__ y __handleSubtract__.
````
const handleReset = (e) =>{
        setCounter(value);
    }
````
````
    const handleSubtract = (e) =>{
        setCounter(counter - 1);
    }
````
De esta forma conseguimos reiniciar el contador y decrementar su valor.
#
> Test con __JEST__ (Unitarias y Integraci贸n)

> __Elemento Posterior 馃憖:__ __[Gif App 鈿涳笍](https://github.com/Paserno/react-gif-app)__
