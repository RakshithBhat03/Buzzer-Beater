import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, Tasks, Timer } from "../pages";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:taskId" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
