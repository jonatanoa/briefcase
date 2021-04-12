import React, { Component } from 'react'

export default class Jokes extends Component {

    state = { joke: {} }; //objeto vacio

    componentDidMount () {
        fetch ('https://official-joke-api.appspot.com/random_joke')
        .then(response=> response.json())
        .then(json => console.log('json', json));
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
