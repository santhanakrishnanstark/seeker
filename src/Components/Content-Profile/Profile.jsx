import React from 'react';
import profilepic from '../../Assets/wa Sandy.jpg';
import './Profile.css';
import linkedinlogo from '../../Assets/LinkedIn-Logo.png';

const profile = () => {
    return ( 
        <div className="Profile">
            <div className="card py-3 text-center">
                <div className="card-body">
                    <div className="above"></div>
                    <img src={profilepic} alt="pic" height="100" width="100" id="propic"/>
                    <h5 className="card-title">Santhanakrishnan M</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Fresher</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Full Stack Developer</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Freelancer</h6>
                    <p className="card-text">Chennai</p>
                    <a href="https://www.linkedin.com/in/santhanakrishnan-meganathan-a06b72149/" 
                    className="btn profilebtn">View Profile</a>
                    <div>
                    <img className="mt-2" alt="LinkedIn" width="80" height="20"
                     src={linkedinlogo}></img>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default profile;