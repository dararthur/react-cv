import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Arthur Daron</h1>
                    <h2>Développeur web</h2>
                    {/*<div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger mon CV</a>
    </div>*/}
                    <div className="presentation">
                        <a href="/portfolio" alt="arthur daron portfolio">Découvrez mes réalisations</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;