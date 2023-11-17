import React from "react";
import "./TermsOfUse.scss";

function TermsOfUse() {
  return (
    <div className="terms">
      <h3 className="terms_title">Terms of Use</h3>
      <p className="text">
        <sapn>Effective Date: [Date] </sapn>
        <sapn className="heading">COLLECTION OF INFORMATION</sapn>
        We do not intentionally gather personal information from visitors on our
        website.
        <span className="heading">COOKIES</span>
        We utilize cookies to improve user experience. Cookies are small text
        files stored on your device to analyze website usage. You have control
        over cookies in your browser settings.
        <span className="heading">EXTERNAL LINKS</span>
        Our website may feature links to third-party websites. We are not
        accountable for the privacy practices or content of these external
        sites.
        <sapn className="heading">ANALYTICS</sapn>
        We employ basic analytics tools to assess website traffic and enhance
        content. These tools may collect non-personal information, such as IP
        addresses, browser types, and visited pages.
        <span className="heading">ADVERTISEMENTS</span>
        Our website may present advertisements. Advertisers might employ cookies
        to gather non-personal information. We lack control over third-party
        advertisers' practices.
        <span className="heading">PRIVACY POLICY</span>
        Changes We retain the right to modify or update this privacy policy at
        any time. Any changes will become effective immediately upon posting.
        <span className="heading">CONTACT</span>
        If you have questions or concerns about our privacy policy, please reach
        out to us at Jozefbedoui@gmail.com. Thanks for visiting our website.
      </p>
    </div>
  );
}

export default TermsOfUse;
