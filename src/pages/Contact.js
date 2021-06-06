import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const contact = () => {
    const Mailto = ({ email, subject, children }) => {
        return (
          <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}`}>{children}</a>
        );
      };
    
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
                            <span>Hauts de France</span>
                        </li>
                    </ul>
                        {/*<ul>
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
                        </li>
                            </ul>*/}
                    <ul>
                        <li>
                            <i className="far fa-envelope"></i>
                            <Mailto email="daron-arthur@protonmail.com" subject="A propos de votre CV">
                                <span>daron-arthur@protonmail.com</span>
                            </Mailto>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/arthur-daron/" target="_blank" rel="noopener noreferrer" alt="Arthur Daron LinkedIn">
                        <h4>LinkedIn</h4>
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/dararthur" target="_blank" rel="noopener noreferrer" alt="Arthur Daron Github">
                        <h4>Github</h4>
                        <i className="fab fa-github"></i>
                        </a>
                    </ul>                    
                </div>
            </div>
        </div>
    );
};

export default contact;