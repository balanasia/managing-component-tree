import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, changeState] = useState(false);

  function handleClick() {
    changeState((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone && "line-through" }}>{props.text}</li>
    </div>
  );
}
export default ToDoItem;
