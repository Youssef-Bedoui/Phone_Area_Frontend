import React, { useState } from "react";
import "./ContactForm.scss";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios"; 

function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setEmptyFields(true);
      setError(false);
      setSuccess(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/contact/send",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setSuccess(true);
        setError(false);
        setEmptyFields(false);
      } else {
        setError(true);
        setSuccess(false);
        setEmptyFields(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setSuccess(false);
      setEmptyFields(false);
    }
  };

  return (
    <section id="contact">
      <div className="left_section">
        <h3>
          GET IN TOUCH
          <div className="line"></div>
        </h3>
        <MailOutlineOutlinedIcon className="mail_icon" />
        <p>Please don't hesitate to contact us for any suggestions.</p>
      </div>
      <form className="right_section" onSubmit={handleFormSubmit}>
        <h3>
          CONTACT FORM
          <div className="line"></div>
        </h3>
        <input placeholder="Name" className="input" name="name" type="text" />
        <input
          placeholder="E-mail"
          className="input"
          name="email"
          type="email"
        />
        <textarea
          name="message"
          className="messageArea"
          placeholder="Your message..."
        />
        <button className="submit submitBtn" type="submit">
          SEND MESSAGE
        </button>
        {emptyFields && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Please fill in all fields.
          </Alert>
        )}
        {success && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your Message sent successfully.
          </Alert>
        )}
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            An Error occurred! <strong>Please retry later.</strong>
          </Alert>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
