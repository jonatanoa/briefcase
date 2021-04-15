import React, { Component } from 'react'

const Joke = ({joke: {setup, punchline}}) => (
    <p style={{margin: 30}}>{setup} <em>{punchline}</em></p>
)

export default class Jokes extends Component {

    state = { joke: {}, jokes:[] }; //objeto vacio

    componentDidMount () {
        fetch ('https://official-joke-api.appspot.com/random_joke')
        .then(response=> response.json())
        .then(json => this.setState({joke: json}))
        .catch(error => alert(error.message)); //en caso de que algo falle
    }

    fetchJokes = () => {
        fetch ('https://official-joke-api.appspot.com/random_ten')
        .then (response=> response.json())
        .then(json => this.setState({jokes: json}))
        .catch(error => alert(error.message)); //em caso de que algo falle
    } 

    render() {

        return (
            <div>
                <h2>highligthted joke</h2>
                <Joke joke ={this.state.joke}/>
                <hr/>
                <h3>Want ten new jokes? </h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {this.state.jokes.map (joke =>  (<Joke key={joke.id} joke={joke}/>))}
            </div>
        )
    }
}
