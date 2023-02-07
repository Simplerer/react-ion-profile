import React, { useState } from "react";

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const inputHandler = (e) => {
    const input = e.target
    const inputType = input.name;
    const inputValue = input.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }



  return (

    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-8 p-3 m-5">
      <form className="">
        <div className="form-group">
        <label>Name</label>
        <input className="form-control" name="name" type="text" 
        placeholder="Name Please" aria-label="name input"
        onChange={inputHandler} value={name}></input>
        </div>
        <label>Email address</label>
          <input type="email" className="form-control" name="email"
          id="email-form" placeholder="muchThanks@scottRocks.com"
          onChange={inputHandler} value={email}/>
        <div className="form-group">
          <label>Message Me</label>
          <textarea className="form-control" id="comment-area" 
          placeholder="Critiques welcome but adolation more so" 
          rows="4" onChange={inputHandler} value={message}></textarea>
          <button type="button" className="btn btn-primary btn-lg m-2">Submit</button>
        </div>
      </form>
      </div>
      <div>
        <p>Thanks for Visiting! Leave me a message and let me know what I could improve upon, or just say Hey!</p>
      </div>
      </div>
    </div>
  )

}

export default Contact; 