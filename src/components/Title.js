import React from "react";

export default function Title(props) {
  const { text, link } = props;

  const target = "_blank";
  const rel = "noreferrer noopener"

  function ifLink() {
    return link
      ? <a href={link} target={target} rel={rel}>{text}</a>
      : text
  }
  return (
    <h3>{ifLink()}</h3>
  );
}