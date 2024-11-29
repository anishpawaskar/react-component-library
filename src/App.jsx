import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyntraFilter } from "./components/MyntraFilter";
import { MultipleImgUploader } from "./components/MultipleImgUploader";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/myntra" element={<MyntraFilter />} />
      </Routes>
    </>
  );
}

export default App;
