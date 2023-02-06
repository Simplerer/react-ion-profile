import React from "react";

function Header() {
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
                    <a class="nav-link active" href="#">About</a>
                    <a class="nav-link" href="#">Portfolio</a>
                    <a class="nav-link" href="#">Contact</a>
                    <a class="nav-link" href="#">Resume</a>
                </nav>
                </div>
                </header>
            </div>
        </div>
    )
};

export default Header;