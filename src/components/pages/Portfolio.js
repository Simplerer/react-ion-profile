import React from "react";
import yaHeard from '../assets/images/YaHeard.png';
import techy from '../assets/images/Tech-E-ish.png';
import weather from '../assets/images/weather-board.png';
import employee from '../assets/images/EmployerTrack.png';
import quiz from '../assets/images/Quiz-Kid.png';
import team from '../assets/images/Team-Roster.png'
import styled from "styled-components";

const P = styled.div`
    font-size: 120%;
    font-weight: 600;
    text-align: center;
`;

// const A = styled.div`
//   text-decoration: none;
//   cursor: pointer;
// `

const styles = {
  img: {
    maxHeight: 285
  },
  a: {
    textDecoration: 'none',
     cursor: 'pointer'
  }
}



function Portfolio() {
  return (

    <div className="container">
      <h2>Portfolio</h2>
      <div className="row d-flex justify-content-around">
        <div className="col-lg-5 col-sm-12 p-2 m-2">
          <div className="card border border-dark" >
            <a style={styles.a} href="https://fathomless-woodland-16696.herokuapp.com/"><img style={styles.img} className="card-img-top" src={yaHeard} alt="Card image cap" /></a>
            <div className="card-body">
              <a style={styles.a} href="https://github.com/Simplerer/ya-heard"><P className="card-text">Ya Heard</P></a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 p-2 m-2">
          <div className="card border border-dark" >
            <a style={styles.a} href="https://limitless-forest-03421.herokuapp.com/"><img style={styles.img} className="card-img-top" src={techy} alt="Card image cap" /></a>
            <div className="card-body">
              <a style={styles.a} href="https://github.com/Simplerer/tech-blog-mvc"><P className="card-text">A Tech-E-ish Blog</P></a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 p-2 m-2">
          <div className="card border border-dark" >
            <a style={styles.a} href="https://simplerer.github.io/weather-board/"><img style={styles.img} className="card-img-top" src={weather} alt="Card image cap" /></a>
            <div className="card-body">
              <a style={styles.a} href="https://github.com/Simplerer/weather-board"><P className="card-text">The Weather Board</P></a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 p-2 m-2">
          <div className="card border border-dark" >
            <a style={styles.a} href="https://github.com/Simplerer"><img style={styles.img} className="card-img-top" src={employee} alt="Card image cap" /></a>
            <div className="card-body">
              <a style={styles.a} href="https://github.com/Simplerer/employee-tracker-manager"><P className="card-text">Employee Tracker Manager</P></a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 p-2 m-2">
          <div className="card border border-dark" >
            <a style={styles.a} href="https://simplerer.github.io/code-quiz-kid/"><img style={styles.img} className="card-img-top" src={quiz} alt="Card image cap" /></a>
            <div className="card-body">
              <a style={styles.a} href="https://github.com/Simplerer/code-quiz-kid"><P className="card-text">Code Quiz Kid</P></a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 p-2 m-2">
          <div className="card border border-dark" >
            <a style={styles.a} href="https://github.com/Simplerer"><img style={styles.img} className="card-img-top" src={team} alt="Card image cap" /></a>
            <div className="card-body">
              <a style={styles.a} href="https://github.com/Simplerer/generate-a-team"><P className="card-text">Generate A Team</P></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Portfolio;