import React from "react";
import Chore from "./Chore";

export default function ChoreList(props) {
  return (
    <>
      <h2>To Do</h2>
      {props.choreList.map((chore) => {
        return (
          <ul key={chore.id}>
            {!chore.complete && (
              <Chore chore={chore} handleToggle={props.handleToggle} />
            )}
          </ul>
        );
      })}

      <h2>Completed</h2>
      {props.choreList.map((chore) => {
        return (
          <ul key={chore.id}>
            {chore.complete && (
              <Chore chore={chore} handleToggle={props.handleToggle} />
            )}
          </ul>
        );
      })}
    </>
  );
}
