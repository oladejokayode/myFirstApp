import React, { useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from "@ionic/react";
//import { login } from "./auth.service"; // Import Firebase auth function
import axios, { AxiosError } from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, { email, password });
        console.log("User logged in:", response.data);
        alert("Login successful!");
    } catch (err: unknown) {  // Use `unknown` to ensure type safety
      if (axios.isAxiosError(err)) {
        console.error("Login error:", err.response?.data || err.message);
      } else {
        console.error("An unexpected error occurred:", err);
      }
      alert("Login failed!");
    }

  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput 
          placeholder="Email" 
          value={email} 
          onIonChange={(e) => setEmail(e.detail.value!)} 
        />
        <IonInput 
          type="password" 
          placeholder="Password" 
          value={password} 
          onIonChange={(e) => setPassword(e.detail.value!)} 
        />
        <IonButton expand="full" onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
