import React, { useState } from "react";
import { emailReal } from '../utils/helper';
import styled from 'styled-components';

const P = styled.div`
    font-size: 120%;
`;

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [greeting, setGreeting] = useState('');

  const inputHandler = (e) => {
    const input = e.target;
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

  function btnClick (e) {
    e.preventDefault();

    if (!emailReal(email)) {
      setErrorMessage('This email is not valid!');
      return;
    }
    if (!name) {
      setErrorMessage('Name is required please!');
      return;
    }
    setGreeting(`Thanks ${name} for the feedback!`);
    setName('');
    setEmail('');
    setMessage('');
    
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
          <textarea className="form-control" id="comment-area" name="message"
          placeholder="Critiques welcome but adolation more so" 
          rows="4" onChange={inputHandler} value={message}></textarea>
          <button type="button" className="btn btn-primary btn-lg m-2" onClick={btnClick}>Submit</button>
        </div>
      </form>
        <p>{errorMessage}</p>
      </div>
      <div className="col-3">
        <P>Thanks for Visiting! Leave me a message and let me know what I could improve upon, or just say Hey!</P>
        <P>{greeting}</P>
      </div>
      </div>
    </div>
  )

}

export default Contact; 