import React, { useState } from "react";

export default function ContactForm() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  function enterName(event) {
    setSenderName(event.target.value);
  }

  function enterEmail(event) {
    setSenderEmail(event.target.value);
  }

  function enterMessage(event) {
    setSenderMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} id="contact-form" method="POST">
      <label htmlFor="sender-name" className="hidden">Your Name:</label>
        <input 
          id="sender-name"
          onChange={enterName}
          value={senderName}
          placeholder="Your name here, please!"
        />
      <label htmlFor="sender-email" className="hidden">Your Name:</label>
        <input
          id="sender-email"
          type="email"
          onChange={enterEmail}
          value={senderEmail}
          placeholder="Your email here, please!"
        />
      <label htmlFor="sender-message" className="hidden">Your Name:</label>
        <textarea
          id="sender-message"
          onChange={enterMessage}
          value={senderMessage}
          placeholder="Your message to me:"
        />
      <input type="submit" />
    </form>
  )
}
