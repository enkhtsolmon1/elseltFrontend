import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import NotFount from "./Pages/Error/NotFount";
import Home from "./Pages/Home/Home";
import LayOut from "./Pages/LayOut";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFount />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
