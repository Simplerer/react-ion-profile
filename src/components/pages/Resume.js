import React from "react";
import resume from '../assets/StoneResume.pdf';

function Resume () {

    return (
        <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
            <div className="col-3">
            <a href={resume} className="btn btn-primary p-4 ms-5" download>Downloadable Resume</a>
            </div>
            <div className="col-6 m-3">
                <section className="m-2 p-2">
                    <h2>Technical Languages</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                    </ul>
                </section>
                <section className="m-2 p-2">
                    <h2>Application Skills</h2>
                    <ul>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                        <li>GraphQL</li>
                    </ul>
                </section>
            </div>
            </div>
           


        </div>
    )

}

export default Resume; 