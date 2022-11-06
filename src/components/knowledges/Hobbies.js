import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies" alt="passions arthur daron">
            <h3>Centres d'intérêts</h3>
            <ul>
                <li><i className="fas fa-running"></i><span>Arts martiaux</span></li>
                <li><i className="fas fa-swimmer"></i><span>Natation</span></li>
                <li><i class="fas fa-laptop-code"></i><span>Développement web</span></li>
                <li><i className="fas fa-atom"></i><span>Sciences</span></li>                
            </ul>
        </div>
    );
};

export default Hobbies;