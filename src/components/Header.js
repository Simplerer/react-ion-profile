import React from "react";

function Header({pageChanger}) {
    return (
        <div class="container">
            <div>
            
                <header class="row d-flex justify-content-around align-items-end ">
                    <div class="col">
                    <h1>Scott Stone</h1>
                    <h2>Full-Stack Developer</h2>
                    </div>
                    <div class="col">
                <nav class="nav">
                    <a class="nav-link active" 
                    href="#about"
                    onClick={()=> pageChanger('About')}
                    >About</a>
                    <a class="nav-link active" 
                    href="#portfolio"
                    onClick={()=> pageChanger('Portfolio')}
                    >Portfolio</a>
                    <a class="nav-link active" 
                    href="#contact"
                    onClick={()=> pageChanger('Contact')}
                    >Contact</a>
                    <a class="nav-link active" 
                    href="#resume"
                    onClick={()=> pageChanger('Resume')}
                    >Resume</a>
                </nav>
                </div>
                </header>
            </div>
        </div>
    )
};

export default Header;