import React from 'react';
import Project from './Project/Project';
import  './Project.css';

const projects = () => {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <Project 
                        title="Student Result Analysis System"
                        description="This is web based tool that gets the semester marks as a 
                                    input and produce various analysis report for the students."  
                        language="J2EE, Bootstrap, MySql"/>

                    <Project 
                        title="Oracle UI"
                        description="This is web based UI tool to work with oracle database 
                                    express edition, the user dont need any sql knowledge to work
                                    with this software"  
                        language="J2EE, Spring MVC, Bootstrap, Oracle"/>
                </div>
            </div>
        </div>
     );
}
 
export default projects;