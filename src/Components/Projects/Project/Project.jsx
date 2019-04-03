import React from 'react';
import './Project.css';

const project = (props) => {
    return ( 
        <div className="Project p-5 mt-4">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <h6>Language Used : {props.language}</h6>
        </div>
     );
}
 
export default project;