import * as firebase from "firebase/app";
import { config } from "./../firebase.config";
import "firebase/auth";

class Firebase {
  auth;
  googleProvider;

  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }

  kickOffAuthentication() {
    return this.auth.signInWithPopup(this.googleProvider).then(googleUser => {
      console.log(googleUser);
    });
  }

  print() {
    console.log(config);
  }
}

export default new Firebase();
