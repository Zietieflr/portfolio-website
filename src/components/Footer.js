import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";

import ExternalLinks from "./ExternalLinks";
import url from "../helpers/urls"

export default function Footer() {
  function mailTo() {
    const user = "lrmcguire93";
    const domain = "gmail.com";
    return "mailTo:" + user + "@" + domain;
  }

  return (
    <footer>
      <ExternalLinks link={mailTo} text="" icon={faEnvelope} />
      <ExternalLinks link={url("medium")} text="" icon={faMedium} />
      <ExternalLinks link={url("github")} text="" icon={faGithub} />
      <ExternalLinks link={url("linkedIn")} text="" icon={faLinkedin} />
    </footer>
  )
}