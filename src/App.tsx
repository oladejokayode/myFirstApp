import React, { useState } from 'react';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonInput, IonButton, IonItem, setupIonicReact } from '@ionic/react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import '@ionic/react/css/core.css'


// Ensure Ionic is initialized
setupIonicReact();

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen className="ion-padding">
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          height: "100vh",
          textAlign: "center",
          background: "black",
          color: "red",
        }}> 
          <h2>Welcome to our Ionic App!</h2>
        </div>
    </IonContent>
  </IonPage>
);

const Form: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!fullName || !email) {
      setError('All fields are required');
      return;
    }
    alert(`Submitted: ${fullName}, ${email}`);
    setFullName('');
    setEmail('');
    setError('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <IonItem>
          <IonInput placeholder="Full Name" value={fullName} onIonInput={e => setFullName(e.detail.value ?? '')} />
        </IonItem>
        <IonItem>
          <IonInput type="email" placeholder="Email Address" value={email} onIonInput={e => setEmail(e.detail.value ?? '')} />
        </IonItem>
        <IonButton expand="full" onClick={handleSubmit}>Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="form" href="/form">
            <IonLabel>Form</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </Router>
  </IonApp>
);

export default App;