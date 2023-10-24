import React from "react";
import { Routes, Route } from "react-router-dom";
import { MenuKnowledge } from "./MenuKnowledge";
import { PythonWorkWithVenv } from "../MdPages/PythonWorkWithVenv";
import DadIWantToBeRDEngineer from "../MdPages/DadIWantToBeRDREngineer";
import ITEventsNN from "./ITEventsNN";

export const MindMap = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuKnowledge />} />
        <Route path="python-work-with-venv" element={<PythonWorkWithVenv />} />
        <Route path="dad-i-want-to-be-r&d-engineer" element={<DadIWantToBeRDEngineer />} />
        <Route path="it-events-nn" element={<ITEventsNN />}></Route>
      </Routes>
    </>
  );
};
