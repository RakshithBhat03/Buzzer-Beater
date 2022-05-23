import React from "react";
import { AddFirstTask } from "../../components";
import "./Tasks.css";
import { useDocumentTitle } from "../../hooks";
function Tasks() {
  useDocumentTitle("Tasks | Buzzer Beater");
  return (
    <div className="tasks-wrapper mx-auto display-flex flex-col p-9">
      <h2 className="txt-white my-5 mx-0">Welcome back user!</h2>
      <div className="tasks-container">
        <AddFirstTask />
      </div>
    </div>
  );
}

export { Tasks };
