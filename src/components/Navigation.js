import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent" alt="arthur daron">
                    <img src="./media/ad.png" alt="profile-pic"/>
                    <h3>Arthur Daron</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/arthur-daron/" target="_blank" rel="noopenner noreferrer" alt="linkedin arthur daron"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/dararthur" target="_blank" rel="noopenner noreferrer" alt="github arthur daron"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Made by Dararthur</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;