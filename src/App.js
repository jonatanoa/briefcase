import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass ();
// const componentClassIntance = new ComponentClass ();

// console.log ('regularClassInstance', regularClassInstance); //se agrega un resgisto regular que ene ste caso es le que esta en '' y despues el objeto real en si
// console.log ('componentClassIntance', componentClassIntance);

class App extends Component { //creamos una clase llamada App la cual sera llamada mas delante como un componente. 
    //linea 24: yo vivo en colombia, y codifico todos los dias.
    //linea 25: my lenguaje favorito es javascript y creo que react.js, es asombroso.
    //linea 26: ademas de codificar, tambian amo la musica, el dibujo y las artes.
    //linea 34: se exporta a aca la variable para que el texto dentro de bio aparezca aca.

    state = {displayBio: false} //esta es la forma resumida

    // constructor() {
    //     super(); //se llama super para invocar al constructor de la clase de componente padre, si no se pone, genera error por que el this.state no se ha definido
    //     this.state = {displayBio: false};//displayBio sera un valoir que controla si debemos mostrar  o no esta nueva seccion.

    //     console.log ('Component this', this);

    //     this.toggleDisplaybio = this.toggleDisplaybio.bind (this); //this es un objeto global

    //     this.toggleDisplaybio = ()=> { ... };
    // }


    toggleDisplaybio = ()=> {
        this.setState({displayBio: !this.state.displayBio}); //stestate cambia el estado de displaybio porque display bio es const.
    }

    render() {
            //ESTO Ya no se necesita porque el if se puso arriba con el signo (?)
        // if (!this.state.displayBio) { // la admiracion (!) convierte a false todo el contexto adentro,
        //     bio = null; //cuando react ve un valor nulo dentro de jsx decide omitir eso  yno genera nada
        // }
        return (
            <div>
                <h1>Hello</h1>
                <p>My name is Jonatan. I am developer. </p>
                <p>I 'm always looking forward to working on meaningful proyects.</p>
                {
                    this.state.displayBio ?(
                        <div>
                            <p>I live in Colombia, and code  every day</p> 
                            <p>My favorite language is JavaScript, and i think Reack.js is awesome</p>
                            <p>Besides coding, i also love music, the drew and arts. </p>
                            <button onClick={this.toggleDisplaybio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplaybio}>Read more</button> 
                        </div>
                    )
                } 
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;
