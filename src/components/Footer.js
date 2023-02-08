import React from "react";

const styles = {
  github: {
    maxHeight: 50
  }
}

function Footer() {
  return (
    <div className="pt-3">
      <div className="card text-center fixed-bottom">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Light</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dark</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Artistic</a>
            </li>
          </ul>
        </div>
        <div className="card-body d-flex justify-content-center">
        <i className="fa fa-linkedin-square fa-3x p-2 me-2" aria-hidden="true"></i>
        <i className="fa fa-github fa-3x p2 m-2" aria-hidden="true"></i>
        <i className="fa fa-stack-overflow fa-3x p-2 ms-2" aria-hidden="true"></i>
          {/* <img style={styles.github} src={github} alt='github logo'></img> */}
        </div>
      </div>
    </div>
  )


}





export default Footer; 