import React from "react";
import moment from "moment";

function Header() {
  let dayOfTheWeek = moment().format("dddd");
  return (
    <div className="header">
      <h1>Daily Chores</h1>
      <h2>{dayOfTheWeek}</h2>
    </div>
  );
}

export default Header;
