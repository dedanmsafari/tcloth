import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDr9PYnbBzQxt9W6pNg7HfKdVm5z_5B-fg",
  authDomain: "tcloth-e5ab4.firebaseapp.com",
  databaseURL: "https://tcloth-e5ab4.firebaseio.com",
  projectId: "tcloth-e5ab4",
  storageBucket: "tcloth-e5ab4.appspot.com",
  messagingSenderId: "1079040013023",
  appId: "1:1079040013023:web:da274b79b4995b7f396f6a",
  measurementId: "G-0B2R9HNTRZ",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
