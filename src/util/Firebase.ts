import * as firebase from "firebase/app";
import { config } from "./../firebase.config";
import "firebase/auth";
import LocalStorage from './LocalStorage';

class Firebase {
  auth;
  googleProvider;
  loggedInUser;

  constructor() {
    firebase.initializeApp(config);

    firebase.auth()
      .onAuthStateChanged(this.authStateChanged.bind(this))

  }

  async kickOffAuthentication() {
    return firebase.auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
              const provider = new firebase.auth.GoogleAuthProvider();

              return firebase.auth().signInWithPopup(provider)
            })
            .catch(e => {
              console.error(e);
            });
  }

  logout() {
    firebase.auth()
      .signOut()
      .then(a => {
        console.log(a);
      })
      .catch(e => {
        console.error(e);
      })
  }

  authStateChanged(state: any) {
    console.log('AUTH STATE', state);
  }

  print() {
    console.log(config);
  }
}

export default new Firebase();
