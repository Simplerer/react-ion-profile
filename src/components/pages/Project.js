import React from "react";
import About from "./About";


function Project ({currentPage}) {

    switch (currentPage){
        case 'About':
            Page = <About/>;
            break;
        case 'Portfolio':
            Page = <Portfolio/>;
            break;
        case 'Contact':
            Page = <Contact/>;
            break;
        case 'Resume':
            Page = <Resume/>;
            break;
    }

    return (
        <div>
            {Page}
        </div>
    )
}

export default Project;