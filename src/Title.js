import React, { Component } from 'react'

const TITLES = [
    'a web developer',
    'a music love',
    'an enthusiastic learner',
    'an adventure seeker'
]
//estao de aca se crea para que el texto cambie cada 4 segundos 
class Title extends Component {
    state = {titleIndex: 0, fadeIn:true};

    componentDidMount(){ //el componentDidMount se la llama cilo de vida porque oermite piner animacion de texto, poniendo un texto cada 4 segundos o como lo especifique uno

        this.timeout=setTimeout(()=> this.setState({fadeIn:false}), 2000)

        this.animateTitles();
    }

    componentWillUnmount (){ //hace que el elemento agregado  a esta funcion, desaparasca dependiento del estado si es true o false, en este caso nos dirigimos a App.js y lo agregamos en displayBio.

        clearInterval(this.titleInterval);
        clearTimeout(this.timeout); 
    }

    animateTitles =()=> {
        this.titleInterval = setInterval(()=> {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex, fadeIn:true});
            setTimeout(()=> this.setState({fadeIn:false}), 2000)
        }, 4000)//setInterval tiene dos argumentos el primero va a ser una funcion

    }

    render () {
        const {fadeIn, titleIndex} = this.state;
        const title= TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}


export default  Title;