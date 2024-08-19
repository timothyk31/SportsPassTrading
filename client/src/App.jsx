import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid">
        <Card contact="111-222-3333" />
        <Card contact="111-222-3333" />
        <Card contact="111-222-3333" />
      </div>
    </>
  );
}

export default App;
