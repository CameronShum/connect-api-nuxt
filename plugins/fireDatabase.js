import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appID: process.env.FIREBASE_APP_ID
  }
  firebase.initializeApp(firebaseConfig)
};

export const auth = firebase.auth()
const db = firebase.firestore()
// const storage = firebase.storage()

const fireDatabase = {
  getWifi: async (uid) => {
    const ref = await db.collection(uid).doc('wifi').get()
    return (ref.data())
  }
}

export default fireDatabase
