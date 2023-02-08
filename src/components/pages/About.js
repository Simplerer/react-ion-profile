import React from "react";
import pic from '../assets/images/headshot.jpg';
import styled from 'styled-components';

const P = styled.div`
    font-size: 120%;
`;

const styles = {
    img: {
        maxHeight: 400
    }
}

function About() {
    
    return (
        <div className="container">
            <h2 className="animate__animated animate__bounce animate__slow 1s">About Me</h2>
            <div className="row d-flex align-items-center m-3 p-3">
                <div className="col-sm-12 col-lg-6">
                    <img style={styles.img} src={pic} alt="Nice Picture"></img>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <P>I spent many years of my life pursuing hobbies and passions in and out of my professional life. I have more recently begun to pull those things together and have dove into the world of web development. Working for many years in the Food and Beverage industry taught me that although people are all different in beautiful ways, they are all so similar. People have needs and require someone to help them achieve satisfaction, even on the small things; I am here to help. I can communicate well with all types of people and find that I can generally help people convey what it is they exactly want when it may be difficult for them. I want to use this in web development and help people see their dream on the screen. The skills I have been developing in my recent Coding cohort are certainly transferable to this new field.</P>
                </div>
            </div>
        </div>
    )
}

export default About;