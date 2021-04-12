import React, { Component } from 'react'

export default class Jokes extends Component {

    state = { joke: {} }; //objeto vacio

    componentDidMount () {
        fetch ('https://official-joke-api.appspot.com/random_joke')
        .then(response=> response.json())
        .then(json => this.setState({joke: json}));
    }

    render() {

        const {setup, punchline} = this.state.joke;
        return (
            <div>
                <h2>highligthted joke</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        )
    }
}
