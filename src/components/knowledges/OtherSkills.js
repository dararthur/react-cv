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
                {/*
                <ul>
                    <li><i className="fas fa-check-square"></i>Une compétence</li>
                    <li><i className="fas fa-check-square"></i>Une compétence</li>
                    <li><i className="fas fa-check-square"></i>Une compétence</li>
                    <li><i className="fas fa-check-square"></i>Une compétence</li>
                </ul>
                */}
            </div>
        </div>
    );
};

export default OtherSkills;