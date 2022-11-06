import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Arthur Daron</h1>
                    <h2>Technicien Systèmes d'Information</h2>
                    <div className="presentation">
                        <a href="https://marieteam.dacothi.fr" target="_blank" rel="noreferrer" alt="arthur daron marieteam">Découvrez une de mes réalisations web...</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;