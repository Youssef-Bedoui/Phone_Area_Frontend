import React, { useEffect } from "react";
import "./Contact.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactForm from "./ContactForm/ContactForm";
function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="contact">
      <h2 className="title">
        Contact Us <SupportAgentIcon className="contact_icon" />
      </h2>
      <p className="description">
        We value your contact! If you have any feedback, suggestions, or
        inquiries, feel free to reach out. Your thoughts are essential in
        helping us improve your experience on Phone Area.
      </p>
      <p className="second_parag">
        If you want to publish your blog online on our website, please don't
        hesitate to send your article by message(the form below).
      </p>
      <h3 className="email">
        <ContactForm />
        Social Media :{" "}
        <div className="media">
          <a
            href="https://www.facebook.com/profile.php?id=61553976273235"
            target="_blank"
            className="facebook"
            rel="noreferrer"
          >
            <FacebookIcon />
            Facebook
          </a>{" "}
        </div>
      </h3>
      <p className="last_parag">
        We are a fresh website and we appreciate your support and look forward
        to hear from you !
      </p>
      <h3 className="advertise_title">Advertising on Phone Area Website</h3>
      <p className="advertisment">
        If you have an online web store, or any kind of stores related to
        Technology and Phones, we provide you with opportunity to boost your
        incomes by showing your advertise on our website . Don't hesitate to get
        in touch with us by filling the form above.
      </p>
      <div className="links">
        <NavLink to="/privacy">Privacy</NavLink>
        <NavLink to="/termsOfUse">Terms d use</NavLink>
      </div>

      <h3 className="thanks">THANK YOU FOR VISITING OUR WEBSITE : )</h3>
      <div className="logo_cont">
        <img alt="logo" src="/assets/images/logo.png" />
      </div>
    </div>
  );
}

export default Contact;
