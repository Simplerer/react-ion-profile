import React from "react";
import yaHeard from '../assets/images/YaHeard.png'


function Portfolio() {
    return (

        <div className="container">
            <h2>Portfolio</h2>
            <div className="row d-flex justify-content-around">                    
                <div className="col-5 p-2 m-2">
                    <div className="card" >
                        <img className="card-img-top" src={yaHeard} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Ya Heard</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-2 m-2">
                    <div className="card" >
                        <img className="card-img-top" src={yaHeard} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Ya Heard</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-2 m-2">
                    <div className="card" >
                        <img className="card-img-top" src={yaHeard} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Ya Heard</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-2 m-2">
                    <div className="card" >
                        <img className="card-img-top" src={yaHeard} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Ya Heard</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-2 m-2">
                    <div className="card" >
                        <img className="card-img-top" src={yaHeard} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Ya Heard</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-2 m-2">
                    <div className="card" >
                        <img className="card-img-top" src={yaHeard} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Ya Heard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;