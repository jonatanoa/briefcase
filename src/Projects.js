import React, { Component} from 'react';
import PROJECTS from './data/projects';

class Projects extends Component {
    //linea 9: proyectos desctacados
    render () {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                    
                        PROJECTS.map((PROJECTS)=> {//esto es el equivalente a lo que tengo abajo.
                            return (//Cuando un elemento de React, muestra más de un mismo tipo de elemento, debe poder identificar qué elementos es cual, para poder actualizarlo correctamente. El Key debe de ser un valor único en la colección y se utiliza por lo general el ID o un campo de los ítems que sea único
                                <div key={PROJECTS.id}>{PROJECTS.title}</div> //PROJECTS.title, es para que en el navegador se muestren los titulos. 
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