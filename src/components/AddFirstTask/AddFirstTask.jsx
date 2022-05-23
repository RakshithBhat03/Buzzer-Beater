import React from "react";
import "./AddFirstTask.css";
function AddFirstTask() {
  return (
    <div className="first-task-wrapper display-flex flex-col justify-content-center align-items-center gap-1">
      <h2 className="txt-white m-0">Add Task</h2>
      <button className="txt-white txt-lg btn-task-large">
        <i className="fas fa-plus-circle"></i>
      </button>
    </div>
  );
}

export { AddFirstTask };
