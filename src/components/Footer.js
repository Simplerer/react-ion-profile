import React from "react";
import github from '../components/assets/images/github-mark.png'

const styles = {
  github: {
    maxHeight: 50
  }
}

function Footer() {
  return (
    <div>
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
        <div className="card-body">
          <img style={styles.github} src={github} alt='github logo'></img>
        </div>
      </div>
    </div>
  )


}





export default Footer; 