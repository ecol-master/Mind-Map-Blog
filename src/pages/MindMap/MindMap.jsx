import React from "react";
import { Routes, Route } from "react-router-dom";
import { MenuKnowledge } from "./MenuKnowledge";
import { PythonWorkWithVenv } from "../MdPages/PythonWorkWithVenv";

import DadIWantToBeRDEngineer from "../MdPages/DadIWantToBeRDREngineer";
import ITEventsNN from "../MdPages/ITEventsNN";
import MomIWantToBeMlEngineer from "../MdPages/MomIWantToBeMlEngineer";
import Algorithms from "../MdPages/Algorithms";
import DiscreteMathematics from "../MdPages/DiscreteMathematics";
import HowToStartInC from "../MdPages/HowToStartInC";
import HowToLEarnSHAD from "../MdPages/HowToLEarnSHAD";
import LinearAlgebra from "../MdPages/LinearAlgebra";
import MathematicalAnalysis from "../MdPages/MathematicalAnalysis";

export const MindMap = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuKnowledge />} />
        <Route path="python-work-with-venv" element={<PythonWorkWithVenv />} />
        <Route path="dad-i-want-to-be-r&d-engineer" element={<DadIWantToBeRDEngineer />} />
        <Route path="it-events-nn" element={<ITEventsNN />}></Route>
        <Route path="mom-i-want-to-be-ml-engineer" element={<MomIWantToBeMlEngineer />}></Route>
        <Route path="algorithms" element={<Algorithms />}></Route>
        <Route path="discrete-mathematics" element={<DiscreteMathematics />}></Route>
        <Route path="how-to-start-in-c" element={<HowToStartInC />}></Route>
        <Route path="how-to-learn-shad" element={<HowToLEarnSHAD />}></Route>
        <Route path="linear-algebra" element={<LinearAlgebra />}></Route>
        <Route path="mathematical-analysis" element={<MathematicalAnalysis />}></Route>
      </Routes>
    </>
  );
};
