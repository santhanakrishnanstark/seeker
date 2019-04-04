import React from 'react';
import './Project.css';

const project = (props) => {
    return ( 
        <div className="Project p-5 mt-4">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <span>Language Used : {props.language}</span>
        </div>
     );
}
 
export default project;