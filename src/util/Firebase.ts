import * as firebase from "firebase/app";
import { config } from "./../firebase.config";
import 'firebase/auth';
import 'firebase/firestore';
import history from './History';

class Firebase {
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

              return firebase.auth().signInWithPopup(provider);
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
    this.loggedInUser = state;
    if (state) {
      history.push('/')
    }
    else {
      history.push('/login')
    }
  }

  authenticated() {
    return this.loggedInUser;
  }

}

export default new Firebase();
