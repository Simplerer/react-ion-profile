import React from "react";
import pic from '../../images/JJ&ME.resize.jpg';
import styled from 'styled-components';

const P = styled.div`
    font-size: 120%;
`;

function About () {
    return(
    <div className="container">
    <div className="row d-flex justify-content-around align-items">
    <div className="col">
    <img src={pic} alt="Nice Picture"></img>
    </div>
    <div className="col p-3 m-3">
    <P>I spent many years of my life pursuing hobbies and passions in and out of my professional life. I have more recently begun to pull those things together and have dove into the world of web development. Working for many years in the Food and Beverage industry taught me that although people are all different in beautiful ways, they are all so similar. People have needs and require someone to help them achieve satisfaction, even on the small things; I am here to help. I can communicate well with all types of people and find that I can generally help people convey what it is they exactly want when it may be difficult for them. I want to use this in web development and help people see their dream on the screen. The skills I have been developing in my recent Coding cohort are certainly transferable to this new field.</P>
    </div>
    </div>
    </div>
    )
}

export default About;