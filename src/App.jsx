import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Page/Course";
import Contact from "./Page/Contact";
import Layout from "./components/Layout";
import Home from "./Page/Home";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
