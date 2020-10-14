import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import ExternalLinks from "./ExternalLinks";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactMe(){
  function mailTo() {
    const user = "lrmcguire93";
    const domain = "gmail.com";
    return "mailTo:" + user + "@" + domain;
  }

  function emailText() {
    const user = "lrmcguire93";
    const domain = "gmail.com";
    return "Email: " + user + "@" + domain;
  }

  function phone() {
    const area = "970";
    const exchange = "214";
    const subscriber = "2617";
    return "tel:" + area + exchange + subscriber;
  }

  function phoneText() {
    const area = "970";
    const exchange = "214";
    const subscriber = "2617";
    return "Call: (" + area + ")" + exchange + "-" + subscriber;
  }

  function linkedIn() {
    return "https://www.linkedin.com/in/logan-mcguire/";
  }

  function linkedInText() {
    return "Visit my LinkedIn"
  }

  return(
    <>
      <h3>Contact Me</h3>
      <ExternalLinks link={mailTo()} text={emailText()} icon={faEnvelope} />
      <ExternalLinks link={phone()} text={phoneText()} icon={faPhone} />
      <ExternalLinks link={linkedIn()} text={linkedInText()} icon={faLinkedin} />
    </>
  )
}
