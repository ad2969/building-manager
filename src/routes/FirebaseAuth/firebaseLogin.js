import React, { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useCookies } from 'react-cookie';

const FirebaseLogin = () => {

    const uiConfig = {
        // callbacks: { signInSuccessWithAuthResult: () => false },
        signInSuccessUrl: "/news",
        signInOptions: [
            {
                provider: window.firebase.auth.EmailAuthProvider.PROVIDER_ID,
                signInMethod: window.firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
            }
        ]
    };

    const [cookies, setCookie] = useCookies();
    
    useEffect(() => {
        
        const unregisterAuthObserver = window.firebase.auth().onAuthStateChanged(user => {
            console.log('user = ', user);
            setCookie('isSignedIn', !!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={window.firebase.auth()}/>
        </div>
      );
}

export default FirebaseLogin
