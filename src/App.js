import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Links } from "./components/Links";
import { Admin } from "./pages/Admin";
import "./scss/App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home Header={Header} Links={Links} />} />
      <Route path="/admin" element={<Admin React={React} axios={axios} />} />
    </Routes>
  );
}

export default App;
