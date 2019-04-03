import React from 'react';
import Navbar from '../Navbar/Navbar';
import snitch from '../../Assets/Golden_Snitch.png';
import './Header.css';
const header = () => {
    return ( 
        <div className="Header pt-3 pb-5">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={snitch} alt="snitch" width="120" height="60"/>
                    <h3 className="d-inline">Seeker</h3>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-4 mt-3">
                    <Navbar/>
                </div>
                <div className="col-md-1"></div>
            </div>
            </div>
        </div>
     );
}
 
export default header;