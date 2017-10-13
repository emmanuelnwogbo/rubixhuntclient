import axios from "axios";
import firebase from "firebase";
import { GOOGLE_USER, FACEBOOK_USER, TWITTER_USER, GITHUB_USER } from "./types";

import Keys from '../utils/firebase_keys.js';

const config = {
	apiKey: Keys.apiKey,
	authDomain: Keys.authDomain,
	databaseURL: Keys.databaseURL,
	projectId: Keys.projectId,
	storageBucket: Keys.storageBucket,
	messagingSenderId: Keys.messagingSenderId
};

firebase.initializeApp(config);

export const facebookSignIn = () => async dispatch => {
  const provider = new firebase.auth.FacebookAuthProvider();
	const userAuth = await firebase.auth().signInWithPopup(provider);

  const user = userAuth.user;
	dispatch({ type: FACEBOOK_USER, payload: user });
}

export const googleSignIn = () => async dispatch => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const userAuth = await firebase.auth().signInWithPopup(provider);

	const user = userAuth.user;
	dispatch({ type: GOOGLE_USER, payload: user });
}

export const twitterSignIn = () => async dispatch => {
  const provider = new firebase.auth.TwitterAuthProvider();
	const userAuth = await firebase.auth().signInWithPopup(provider);

	const user = userAuth.user;
	dispatch({ type: TWITTER_USER, payload: user });
}

export const githubSignIn = () => async dispatch => {
  const provider = new firebase.auth.GithubAuthProvider();
	const userAuth = await firebase.auth().signInWithPopup(provider);

	const user = userAuth.user;
	dispatch({ type: GITHUB_USER, payload: user });
}
