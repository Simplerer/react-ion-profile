import React from "react";
import pic from '../../images/JJ&ME.resize.jpg'

function About () {
    return(
    <div class="row d-flex justify-content-between">
    <div class="col">
    <img src={pic} alt="Nice Picture"></img>
    </div>
    <div class="col">
    <p>So Handsome, Scott has struggled to show he also is the most talented of all the sppoon players in the area. He now uses forks to really show whats up.</p>
    </div>
    </div>
    )
}

export default About;