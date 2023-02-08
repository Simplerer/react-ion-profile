import React from "react";
import styled from "styled-components";

const AnchorLink = styled.a`
   text-decoration: none;
   cursor: pointer;
 `;

function Footer() {

  return (
    <div className="pt-3">
      <div className="card text-center">       
        <div className="card-body d-flex justify-content-center">
        <AnchorLink href="https://www.linkedin.com/in/scott-stone-392156231/" target={"_blank"}>
          <i className="fa fa-linkedin-square fa-3x p-2 me-2" aria-hidden="true"></i></AnchorLink>
        <AnchorLink href="https://github.com/Simplerer" target={"_blank"}>
          <i className="fa fa-github fa-3x p2 m-2" aria-hidden="true"></i></AnchorLink>
        <AnchorLink href="https://stackoverflow.com/users/21167977/simplerer" target={"_blank"}>
          <i className="fa fa-stack-overflow fa-3x p-2 ms-2" aria-hidden="true"></i></AnchorLink>        
        </div>
      </div>
    </div>
  )

}





export default Footer; 