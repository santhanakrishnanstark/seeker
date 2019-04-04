import React from 'react';
import './Contact.css';

const contact = () => {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mx-auto ">
                    <div className="contact-form">
                         <h2 className="text-center">Thanks for taking the time to reach out. How can I help you today?</h2>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label>Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label>E-Mail</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            <label>Message</label>
                            <textarea className="form-control" rows="4"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn submitbtn px-5">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default contact;