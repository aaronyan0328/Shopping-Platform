import React, { useState, useEffect } from "react";
import firebase from "firebase";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BrowserRouter as Router} from "react-router-dom";
import Mainpage from "./Mainpage";

var uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const userInfo = authResult.additionalUserInfo;
      if (userInfo.isNewUser && userInfo.providerId === "password") {
        try {
          await authResult.user.sendEmailVerification();
          console.log("Check your email.");
        } catch (e) {
          console.log(e);
        }
      }
      return false;
    },
  },
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("Successufully Signed out");
    })
    .catch(function () {
      console.log("Error Signed out");
    });
};

const Signup = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // eslint-disable-next-line
    const user = firebase.auth().currentUser;
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return authObserver;
  });
  console.log("user", user);
  
  if (user) {
    return(
      <Router>
        <div className = 'Mainpage'>
          <Mainpage />
          <button onClick={signOut}>Sign out</button>
        </div>
      </Router>
      
    ); 
  } else {
    return (
      <>
        <div>Sign up / Register</div>
        <StyleFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </>
    );
  }
};

export default Signup;
