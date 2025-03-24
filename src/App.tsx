import React from "react";
import SignupForm from "./nativedevice_features/SignupForms";
import List from "./nativedevice_features/List";
import CameraComponent from "./nativedevice_features/CameraComponent";
import "@ionic/react/css/core.css";

const App: React.FC = () => {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>📌 Assignment 4</h1>
      <SignupForm />
      <List />
      <CameraComponent />
    </div>
  );
};

export default App;
