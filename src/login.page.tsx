import React, { useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from "@ionic/react";
import { login } from "./auth.service"; // Import Firebase auth function

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      console.log("User logged in:", user);
    } catch (error) {
      console.error("Login error:", error);
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
