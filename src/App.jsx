import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyntraFilter } from "./components/MyntraFilter";
import { MultipleImgUploader } from "./components/MultipleImgUploader";
import { useEffect, useState } from "react";
import { SliderPage } from "./components/Slider/SliderPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SliderPage />} />
        <Route path="/myntra" element={<MyntraFilter />} />
      </Routes>
    </>
  );
}

export default App;
