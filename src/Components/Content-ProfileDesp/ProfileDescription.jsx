import React from 'react';
import './ProfileDescription.css';

const profiledescription = () => {
    return ( 
        <div className="Description">
            <h5>If you can't do great things</h5>
            <h5>do small thing in a great way!</h5>
            <br/>
            <p> Hi! Nice to Meet you.
                I Design & Code beautiful simple things and I love what I do.
               <br/>
                Yes, Still I am a fresher and am not work for any company yet, But 
                I work for myself to do some creative things on the web ;)
                <br/>
                I'm quietly condident, naturally curious of my work what am doing.
            </p>
            <p>
                Check out my works on the following sites!
                <br/><br/>
                <i className="fab fa-github mr-2"></i> 
                <a href="https://github.com/santhanakrishnanstark">https://github.com/santhanakrishnanstark</a>
                <br/>
                <i className="fab fa-codepen mr-2"></i>
                <a href="https://codepen.io/Santhanakrishnan">https://codepen.io/Santhanakrishnan</a>

            </p>
        </div>  
     );
}
 
export default profiledescription;