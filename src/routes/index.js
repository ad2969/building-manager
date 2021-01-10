import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useCookies } from 'react-cookie';
import firebase from 'firebase';

import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Landing from "./Landing";
import NotFound from "./NotFound";
import FirebaseLogin from "./FirebaseAuth/firebaseLogin";

import Navigation from "../components/navigation"

const Routes = () => {


  const [cookies] = useCookies();
  initFirebase();

  const isSignedIn = cookies.isSignedIn === "true";
  // Load user session
  useEffect(() => {
  }, []);

  return (
    <BrowserRouter>
      <Switch>
      <Route path="/login" component={FirebaseLogin} />
        {/* MANAGER ROUTES */}

        {/* USER ROUTES */}
        <PrivateRoute exact path="/home" component={Home} isSignedIn={isSignedIn} />
        <PrivateRoute exact path="/" component={Landing} isSignedIn={isSignedIn} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Navigation isSignedIn={isSignedIn} />
    </BrowserRouter>
  );
};

function initFirebase() {
  
  const config = {
    apiKey: "AIzaSyDOj3sygox9nLbbjKUQE7wVtHlLovF4Wy8",
    authDomain: "building-manager-eb943.firebaseapp.com",
    projectId: "building-manager-eb943",
    storageBucket: "building-manager-eb943.appspot.com",
    messagingSenderId: "906379566498",
    appId: "1:906379566498:web:7c3da88b7113b8a55aa6fb"
  };

  !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  window.firebase = firebase;
}

export default Routes;
