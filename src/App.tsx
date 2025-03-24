import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { UserProvider } from "./pwa_features/UserContext";
import UserProfile from "./pwa_features/UserProfileded";
import UserProfileDetails from "./pwa_features/UserProfileDetails";
import Posts from "./pwa_features/Posts";
import "@ionic/react/css/core.css";
import "./theme/variables.css"; // Ensure this is imported

const App: React.FC = () => {
  return (
    <UserProvider>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>📌 Assignment App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="ion-padding">
          <div className="center-container">
            <UserProfile />
            <UserProfileDetails />
            <Posts />
          </div>
        </IonContent>
      </IonPage>
    </UserProvider>
  );
};

export default App;
