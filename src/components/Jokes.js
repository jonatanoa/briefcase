import React, { Component } from 'react'

const Joke = ({joke}) => {
    const {setup, punchline} =joke;

    return <p>{setup} <em>{punchline}</em></p>
}

export default class Jokes extends Component {

    state = { joke: {}, jokes:[] }; //objeto vacio

    componentDidMount () {
        fetch ('https://official-joke-api.appspot.com/random_joke')
        .then(response=> response.json())
        .then(json => this.setState({joke: json}));
    }

    fetchJokes = () => {
        fetch ('https://official-joke-api.appspot.com/random_ten')
        .then (response=> response.json())
        .then(json => this.setState({jokes: json}));
    } 

    render() {

        const {setup, punchline} = this.state.joke;
        return (
            <div>
                <h2>highligthted joke</h2>
                <Joke joke ={this.state.joke}/>
                <hr/>
                <h3>Want ten new jokes? </h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {this.state.jokes.map (joke =>  (<joke key={joke.id} joke={joke}/>))}
            </div>
        )
    }
}
