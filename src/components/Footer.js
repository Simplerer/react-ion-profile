import React from "react";
import github from '../images/github-mark.png'

const styles = {
  github: {
    maxHeight: 50
  }
}

function Footer() {
  return (
    <div>
      <div class="card text-center fixed-bottom">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">Light</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Dark</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Artistic</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <img style={styles.github} src={github} alt='github logo'></img>
        </div>
      </div>
    </div>
  )


}





export default Footer; 