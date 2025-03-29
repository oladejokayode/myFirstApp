import React from "react";
import { 
  IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, 
  IonPage, IonContent, IonToolbar, IonTitle 
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import { home, person, list, camera, logIn } from "ionicons/icons"; // Added home icon

import SignupForm from "./nativedevice_features/SignupForms";
import List from "./nativedevice_features/List";
import CameraComponent from "./nativedevice_features/CameraComponent";
import LoginPage from "./login.page"; 

import '@ionic/react/css/core.css';
import "./theme/variables.css"; 

// New Home Component
const Home: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding">
      <div className="center-container">
        <h2>Welcome to My App</h2>
        <p>Explore the features using the tabs below.</p>
      </div>
    </IonContent>
  </IonPage>
);

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonPage>
          <IonToolbar>
            <IonTitle>📌 OLADEJO KAYODE ASSIGNMENTS</IonTitle>
          </IonToolbar>

          <IonTabs>
            <IonRouterOutlet>
              {/* Routes */}
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupForm} />
              <Route exact path="/list" component={List} />
              <Route exact path="/camera" component={CameraComponent} />
              <Route exact path="/">
                <Redirect to="/home" /> {/* Home is now the default */}
              </Route>
            </IonRouterOutlet>

            {/* Tab Navigation */}
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="login" href="/login">
                <IonIcon icon={logIn} />
                <IonLabel>Login</IonLabel>
              </IonTabButton>
              <IonTabButton tab="signup" href="/signup">
                <IonIcon icon={person} />
                <IonLabel>Signup</IonLabel>
              </IonTabButton>
              <IonTabButton tab="list" href="/list">
                <IonIcon icon={list} />
                <IonLabel>List</IonLabel>
              </IonTabButton>
              <IonTabButton tab="camera" href="/camera">
                <IonIcon icon={camera} />
                <IonLabel>Camera</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
