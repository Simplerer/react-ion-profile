import React from "react";
import github from '../images/github-mark.png'

const styles = {
    github: {
        maxHeight: 50
    }
}

function Footer () {
    return (
    <div>
       <img style={styles.github} src={github} alt='github logo'></img>
    </div>
    )


}





export default Footer; 