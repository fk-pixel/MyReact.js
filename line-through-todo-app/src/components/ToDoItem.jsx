import React, { useState } from "react";

function ToDoItem({ text }) {
  const [isDone, setIsDone] = useState(false);
  function getTextThrough() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={getTextThrough}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {text}
      </li>
    </div>
  );
}

export default ToDoItem;
