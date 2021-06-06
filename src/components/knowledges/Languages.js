import React, { Component } from 'react';
import ProgressBar from './ProgressBar'

class Languages extends Component {
state={
    languages: [
        {id:1,value:"Javascript", xp:0.8},
        {id:1,value:"Css", xp:0.4},
        {id:1,value:"Php", xp:1},
        {id:1,value:"Java", xp:1}
    ],
    frameworks:[
        {id:1,value:"Symfony", xp:1},
        {id:1,value:"Bootstrap", xp:0.6},
        {id:1,value:"Sass", xp:0.4},
        {id:1,value:"React", xp:0.28}
    ]
}

    render() {
        let {languages,frameworks}=this.state;

        return (
            <div className="languagesFrameworks" alt="frameworks langages arthur daron">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                    languages={frameworks}
                />
            </div>
        );
    }
}

export default Languages;