import * as React from 'react';

import './../assets/css/ContactSection.css';

import map from './../assets/img/map.svg';

const ContactSection: React.FC = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-details">
                <span className="location">
                    Scotland,
                    <br />
                    <span>United Kingdom</span>
                </span>
                <div className="email">hello@lennarthase.dev</div>
                <div className="socials">
                    <span>or</span>
                    <br />
                    <br />
                    <br />
                    <i className="fal fa-long-arrow-alt-left"></i> &nbsp; Socials
                </div>
            </div>
            <div className="contact-map">
                <img src={map} alt="Map Icon" />
            </div>
        </div>
    );
};

export default ContactSection;
