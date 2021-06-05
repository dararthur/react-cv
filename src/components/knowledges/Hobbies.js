import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Centres d'intérêts</h3>
            <ul>
                <li><i className="fas fa-running"></i><span>Arts martiaux</span></li>
                <li><i className="fas fa-swimmer"></i><span>Natation</span></li>
                <li><i className="fab fa-bitcoin"></i><span>Cypto-monnaies</span></li>
                <li><i className="fas fa-atom"></i><span>Science</span></li>                
            </ul>
        </div>
    );
};

export default Hobbies;