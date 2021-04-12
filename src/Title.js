import React, { Component } from 'react'

const TITLES = [
    'a web developer',
    'a music love',
    'an enthusiastic learner',
    'an adventure seeker'
]
//estao de aca se crea para que el texto cambie cada 4 segundos 
class Title extends Component {
    state = {titleIndex: 0};

    componentDidMount(){ //el componentDidMount se la llama cilo de vida porque oermite piner animacion de texto, poniendo un texto cada 4 segundos o como lo especifique uno

        this.animateTitles();
    }

    componentWillUnmount (){ //hace que el elemento agregado  a esta funcion, desaparasca dependiento del estado si es true o false, en este caso nos dirigimos a App.js y lo agregamos en displayBio.

        clearInterval(this.titleInterval);
    }

    animateTitles =()=> {
        this.titleInterval = setInterval(()=> {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex});
        }, 4000)//setInterval tiene dos argumentos el primero va a ser una funcion

    }

    render () {
        const title= TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}


export default  Title;