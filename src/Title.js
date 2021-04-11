import React, { Component } from 'react'

const TITLES = [
    'a sofware engineer',
    'a music love',
    'an enthusiastic learner',
    'an adventure seeker'
]

class Title extends Component {
    state = {titleIndex: 0};

    render () {
        const title= TITLE[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}


export default  Title;