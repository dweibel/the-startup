import React from "react";

export default function IdeaCard(props) {
  return <div className="card">{props.title}</div>;
}

IdeaCard.defaultProps = {
  text: ""
};