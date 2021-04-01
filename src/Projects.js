import React, { Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {
        console.log('this.props', this.props);

        const { title, image, description, link } = this.props.project; 

        return (
            <div>
                <h3>{title}</h3>
                <img src={image} alt='profile'/> 
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {

    render () {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                    
                        PROJECTS.map(PROJECT=> {//esto es el equivalente a lo que tengo abajo.
                            return (//Cuando un elemento de React, muestra más de un mismo tipo de elemento, debe poder identificar qué elementos es cual, para poder actualizarlo correctamente. El Key debe de ser un valor único en la colección y se utiliza por lo general el ID o un campo de los ítems que sea único
                                <Project key={PROJECT.id} project={PROJECT}/> //PROJECTS.title, es para que en el navegador se muestren los titulos. 
                            );
                        })
                    
                    /* <div>{PROJECTS [0]. title}</div>
                    <div>{PROJECTS [1]. title}</div>
                    <div>{PROJECTS [2]. title}</div> *///long way} 
                    }
                </div>
            </div>
        )
    }
} 

export default  Projects;