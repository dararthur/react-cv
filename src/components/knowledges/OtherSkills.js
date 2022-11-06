import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list" alt="competences arthur daron">
                <ul>
                    <li><i className="fas fa-check-square"></i>Anglais technique</li>
                    <li><i className="fas fa-check-square"></i>GitHub</li>
                    <li><i className="fas fa-check-square"></i>SEO</li>
                    <li><i className="fas fa-check-square"></i>Méthodes agiles</li>
                </ul>
                {
                <ul>
                    <li><i className="fas fa-check-square"></i>Suivi de projet - kanban</li>
                    <li><i className="fas fa-check-square"></i>Esprit de synthèse</li>
                    <li><i className="fas fa-check-square"></i>Veille juridique et technologique</li>
                    <li><i className="fas fa-check-square"></i>Prévention et premiers secours</li>
                </ul>
                }
            </div>
        </div>
    );
};

export default OtherSkills;