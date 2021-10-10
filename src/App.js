import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

import Header from "./components/Header";
import ChoreList from "./components/ChoreList";

export default function App() {
  const [choreList, setChoreList] = useState(data);

  function handleToggle(id, complete) {
    //find the chore that is being toggled
    let taskList = [...choreList];

    let index = taskList.findIndex((t) => t.id === id);

    // update chore status
    taskList[index] = {
      ...taskList[index],
      complete: !complete,
    };

    //replace & set state
    setChoreList(taskList);
  }

  return (
    <div className="App">
      <Header />
      <ChoreList choreList={choreList} handleToggle={handleToggle} />
    </div>
  );
}
