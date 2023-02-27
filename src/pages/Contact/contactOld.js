import React, { useState } from 'react';

import "./style.css";

import { validateEmail } from "../../utils/helpers";

export default function Contact() {

  // const [email, setEmail] = useState("");
  // const [contactName, setContactName] = useState("");
  // const [textArea, setTextArea] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formInput, setFormInput] = useState({ name: "", email: "", message: "" })

  // const handleInputChange = (e) => {
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === "contactName") {
  //     setContactName(inputValue);
  //   } else if (inputType === "email") {
  //     setEmail(inputValue);
  //   } else {
  //     setTextArea(inputValue);
  //   }
  // };
  console.log(formInput);

  const handleInputChange = (e) => setFormInput({ ...formInput, [e.target.name]: e.target.value }); // square brackets in object denotes key 

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formInput.email) || !formInput.name) {
      setErrorMessage("Either you didn't enter a name, or the email address you entered is invalid.");
      return;
    }

    alert(`Welcome to the jungle, ${formInput.name}!`);

    // setContactName("");
    // setEmail("");
    // setTextArea("");
  }

  return (
    <div className="contactCard">
      <h1 className="contactCardHeading">Contact Me</h1>
      <div className ="contactContainer">
      <h3 className="contactCardContent">Hi {formInput.name}!</h3>
        <form className="contactForm">
          <input
            value={formInput.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Name"
            className="contactArea"
          />
          <input
            value={formInput.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Your Email"
            className="contactArea"
          />
          <textarea
            value={formInput.message}
            name="message"
            onChange={handleInputChange}
            type="textArea"
            placeholder="Text Area"
            className="contactArea"
          />
          <button type="button" className="btn btn-secondary" onClick={handleFormSubmit}>Send It</button>
        </form>
        {errorMessage && (
          <div className="error-div">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>      
      <p className="contactCardContent">
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
    </div>
  );
}
