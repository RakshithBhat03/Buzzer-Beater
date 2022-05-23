import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, Tasks } from "../pages";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
