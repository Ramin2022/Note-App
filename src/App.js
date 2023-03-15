import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNote from "./Components/CreateNote";
import ReadNote from "./Components/ReadNote";
import UpdateNote from "./Components/UpdateNote";
import Layout from "./Components/Layout";
import About from "./Components/About";

// They routes part
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CreateNote />} />
            <Route path="/readnote" element={<ReadNote />} />
            <Route path="/updatenote" element={<UpdateNote />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
