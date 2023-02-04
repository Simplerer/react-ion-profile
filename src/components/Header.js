import React from "react";

function Header() {
    return (
        <div>
        <header>
        <h1>Scott Stone</h1>
        <h2>Dream Maker</h2>
        <h2>Heart Shaker</h2>
        </header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" >Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" >About Me</a>
                    <a class="nav-item nav-link" >Portfolio</a>
                    <a class="nav-item nav-link" >Contact</a>
                    <a class="nav-item nav-link disabled" >Resume</a>
                </div>
            </div>
        </nav>
        </div>
    )
};

export default Header;