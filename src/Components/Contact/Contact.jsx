import React,{Component} from 'react';
import axios from '../../axios-contact';
import './Contact.css';
import SocialLinks from '../SocialLinks/SocialLinks';

class Contact extends Component{

    state = {
            name : '',
            email : '',
            message : ''
    }

    nameHandler = (e) =>{
        this.setState({name:e.target.value});
    }
    mailHandler = (e) =>{
        this.setState({email:e.target.value});
    }
    messageHandler =(e) =>{
        this.setState({message:e.target.value});
    }

    contactHandler = () =>{
        const contact = {
            name : this.state.name,
            email : this.state.email,
            message : this.state.message
        }
        axios.post('/contacts.json',contact)
        .then(response =>{
             alert('Thanks for your message, we received !');
         })
        .catch(error => console.log(error));
    }

 render() {
        return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mx-auto ">
                    <div className="contact-form">
                         <h2 className="text-center">Thanks for taking the time to reach out. How can I help you today?</h2>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label>Name</label>
                                <input type="text" onChange={this.nameHandler} className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label>E-Mail</label>
                                <input type="text" onChange={this.mailHandler} className="form-control" />
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            <label>Message</label>
                            <textarea className="form-control" onChange={this.messageHandler} rows="4"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" onClick={this.contactHandler} className="btn submitbtn px-5">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-8 mx-auto text-center">
                    <h5>Or</h5>
                    <h6>ping me on </h6>
                    <SocialLinks/>
                </div>
            </div>
        </div>
     );
    }
}
 
export default Contact;