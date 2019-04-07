import React from 'react';
import './SocialLinks.css';

const sociallinks = () => {
    return ( 
            <div className="social-btns p-3 m-3">
                <a className="btn facebook" href="https://www.facebook.com/santhanakrishnan.m.71"><i className="fab fa-2x fa-facebook"></i></a>
                <a className="btn twitter" href="https://twitter.com/Santhan73454883"><i className="fab fa-2x fa-twitter"></i></a>
                <a className="btn instagram" href="https://www.instagram.com/sandy_krish__/"><i className="fab fa-2x fa-instagram"></i></a>
            </div>  
     );
}

export default sociallinks;