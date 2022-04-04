import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Burtgel from "./Pages/Burtgel/Burtgel";
import Juram from "./Pages/Burtgel/Juram";
import ContactUs from "./Pages/Contact/ContactUs";
import NotFount from "./Pages/Error/NotFount";
import Home from "./Pages/Home/Home";
import Program from "./Pages/Hutulbur/Program";
import LayOut from "./Pages/LayOut";
import Profile from "./Pages/Profile/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="programs" element={<Program />} />
          <Route path="burtgel" element={<Burtgel />} />
          <Route path="juram" element={<Juram />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFount />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
