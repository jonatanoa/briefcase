import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {

    const { title, image, description, link }= props.project; 

    return (
        <div style={{display: 'inline-block', width: 300, margin: 30}}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{width: 200, height: 120}}/> 
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}

const Projects =()=> (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
             {
                    
            PROJECTS.map(PROJECT=> (//esto es el equivalente a lo que tengo abajo.
                 //Cuando un elemento de React, muestra más de un mismo tipo de elemento, debe poder identificar qué elementos es cual, para poder actualizarlo correctamente. El Key debe de ser un valor único en la colección y se utiliza por lo general el ID o un campo de los ítems que sea único
                <Project key={PROJECT.id} project={PROJECT}/> //PROJECTS.title, es para que en el navegador se muestren los titulos. 
                 ))
                    
             /* <div>{PROJECTS [0]. title}</div>
             <div>{PROJECTS [1]. title}</div>
             <div>{PROJECTS [2]. title}</div> *///long way} 
            }
        </div>
    </div>
        ) 

export default  Projects;