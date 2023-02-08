import React from "react";
import styled from "styled-components";
import images from '../assets/index';

const Paragraph = styled.p`
    font-size: 120%;
    font-weight: 600;
    text-align: center;
`;

const AnchorLink = styled.a`
   text-decoration: none;
   cursor: pointer;
 `;

const styles = {
  img: {
    maxHeight: 250
  },
}

function Portfolio() {
  return (
    <div className="container">
      <h2 className="animate__animated animate__bounce animate__slow 1s">Portfolio</h2>
      <div className="row d-flex justify-content-around">
        <>
          {images.map(images =>
            <div className="col-lg-4 col-sm-12 p-2 m-2">
              <div className="card border border-dark" >
                <AnchorLink href={images.link} target={"_blank"}>
                  <img style={styles.img} className="card-img-top"
                   src={`${process.env.PUBLIC_URL}/images/${images.filename}`} />
                  </AnchorLink>
                <div className="card-body">
                  <AnchorLink href={images.github} target={"_blank"}>
                    <Paragraph className="card-text">{images.title}</Paragraph>
                  </AnchorLink>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </div>

  )
}


export default Portfolio;