import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { Landing } from "./pages/Landing/Landing";
import { MindMap } from "./pages/MindMap/MindMap";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/mindmap/*" element={<MindMap />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
