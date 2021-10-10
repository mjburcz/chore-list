import React from "react";

export default function Chore(props) {
  function handleClick(id, complete) {
    props.handleToggle(id, complete);
  }

  return (
    <div
      className={props.chore.complete ? "done" : "bold"}
      onClick={() => handleClick(props.chore.id, props.chore.complete)}
    >
      {props.chore.task}
    </div>
  );
}
