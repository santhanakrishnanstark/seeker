import React from 'react';
import Profile from '../Content-Profile/Profile';
import ProfileDescription from '../Content-ProfileDesp/ProfileDescription';
import './Content.css';

const content = () => {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <div className="row content">
                        <div className="col-md-5">
                            <Profile/>
                        </div>
                        <div className="col-md-7">
                            <ProfileDescription/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default content;