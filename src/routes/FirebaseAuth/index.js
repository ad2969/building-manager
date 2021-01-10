import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDOj3sygox9nLbbjKUQE7wVtHlLovF4Wy8',
    authDomain: 'localhost'
};

firebase.initializeApp(config);

const uiConfig = {
    callbacks: {},
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ]
  };

  class FirebaseAuth extends React.Component {
    render() {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
  }

  export default FirebaseAuth
