import React from "react";

function Header({pageChanger}) {
    return (
        <div className="container">
            <div>
            
                <header className="row d-flex justify-content-around align-items-end ">
                    <div className="col">
                    <h1>Scott Stone</h1>
                    <h2>Full-Stack Developer</h2>
                    </div>
                    <div className="col">
                <nav className="nav">
                    <a className="nav-link active" 
                    href="#about"
                    onClick={()=> pageChanger('About')}
                    >About</a>
                    <a className="nav-link" 
                    href="#portfolio"
                    onClick={()=> pageChanger('Portfolio')}
                    >Portfolio</a>
                    <a className="nav-link" 
                    href="#contact"
                    onClick={()=> pageChanger('Contact')}
                    >Contact</a>
                    <a className="nav-link" 
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