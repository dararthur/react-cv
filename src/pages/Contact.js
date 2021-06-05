import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Lille</span>
                        </li>
                        </ul><ul>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0601020304">
                            <span 
                                className="clickInput" onClick={() => {
                                alert('Téléphone copié')
                                }}
                                >
                                    06 01 02 03 04
                                </span>
                            </CopyToClipboard>
                        </li></ul>
                        <ul><li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="mon@mail.com">
                            <span 
                                className="clickInput" onClick={() => {
                                alert('Email copié')
                                }}
                                >
                                    mon@mail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <h4>LinkedIn</h4>
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <h4>Github</h4>
                        <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <h4>CodePen</h4>
                        <i className="fab fa-codepen"></i>
                        </a>
                    </ul>                    
                </div>
            </div>
        </div>
    );
};

export default contact;