import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root')); //<App/> es un etiqueta creada desde la clase que creams en App.js. se puede usar asi tambien <App></App>





//promises

// new Promise ((resolve, reject) => { //se hace una promesa para que primero se ejecute Bears y despues lo demas, lo cual va encerrado en .then
//     //reject se pone por si la solicitud no se dio
    
//     return reject(new Error ('No bears'));
    
//     // setTimeout ayuda a retrasar la ejecucion de un componente
//     setTimeout(() => { //queremos un setTimeout para una funsion 
//     resolve('Bears, beets, battlestart Galactica');
// }, 2000);
// })
// .then(quote => {
    
// console.log (quote);
// })

// .catch(error => console.log('error', error)) ;










// class Animal {
//     constructor (name, age) {
//         this.name = name ;
//         this.age = age;
//     }

//     speak() {
//         console.log ('I am', this.name, 'and i am ', this.age, 'years olg');
//     }
// }

// const animal1 = new Animal('simba', 3);
// animal1.speak(); //aqui estoy llamando a la constante animal1 y a la clase speak

// console.log (animal1) //aqui estoy llamando por consola a animal1

// class Lion extends Animal {
//     constructor (name, age, furColor, speed, puppies ) { //esta clase debe de conservar los valores de la clase pricipal como name y age, fucolor y speed ya son propiedades de esta clase
//         super (name, age); //esto se hace para llamar a las propiedades de la clase animal
//         this.furColor= furColor;
//         this.speed= speed;
//         this.puppies= puppies;

//     }

//     roar() {
//         console.log (
//             'ROOAR! I Have', 
//             this.furColor, 
//             'fur, and i can run', 
//             this.speed, 
//             'miles an hour!, and i have',
//             this.puppies,
//             'puppies'
//         );
//     }
// }

// const lion1 =new Lion('Mufasa', 20, 'golden', 25, 5);
// lion1.speak();
// lion1.roar();
// console.log (lion1);



// const lion2 =new Lion ('king', 30, 'red', 40);
// lion2.speak();
// lion2.roar ();
// console.log (lion2);