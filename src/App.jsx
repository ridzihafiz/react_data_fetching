import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FetchApi from "./pages/FetchApi";
import Axios from "./pages/Axios";
import { Link } from "react-router-dom";
import Query from "./pages/Query";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: 20,
        margin: "0px auto",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
      }}
    >
      <Link to={"/"}>Fetch Api</Link>
      <Link to={"/axios"}>Axios</Link>
      <Link to={"/query"}>React Query</Link>
    </nav>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FetchApi />} />
        <Route path="/axios" element={<Axios />} />
        <Route path="/query" element={<Query />} />
      </Routes>
    </>
  );
}

export default App;
