import React from "react";

const styles = {
    card : {
        width: '18rem'
    }
}

function Portfolio() {
    return (

        <div className="container">
            <h2>About Me</h2>
            <div className="row d-flex justify-content-between">
                <div className="col-4">
                <div className="card" style={styles.card}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text"></p>
                    </div>
                </div>

                </div>
                <div className="col-3">
                    <h2>&#8592;Project 1</h2>
                    <h2>Project 2&#8594;</h2>
                </div>
                <div className="col-4">
                    <div className="card" style={styles.card}>
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-4">
                <div className="card" style={styles.card}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text"></p>
                    </div>
                </div>

                </div>
                <div className="col-3">
                    <h2>&#8592;Project 1</h2>
                    <h2>Project 2&#8594;</h2>
                </div>
                <div className="col-4">
                    <div className="card" style={styles.card}>
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-4">
                <div className="card" style={styles.card}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text"></p>
                    </div>
                </div>

                </div>
                <div className="col-3">
                    <h2>&#8592;Project 1</h2>
                    <h2>Project 2&#8594;</h2>
                </div>
                <div className="col-4">
                    <div className="card" style={styles.card}>
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;