// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import '@firebase/firestore'

import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'
import { connectAuthEmulator, getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyAHhDLkOj69sJud0NXj7SQ7eWGbWsJzXSw',

  authDomain: 'bisch-55ad4.firebaseapp.com',

  projectId: 'bisch-55ad4',

  storageBucket: 'bisch-55ad4.appspot.com',

  messagingSenderId: '120044883730',

  appId: '1:120044883730:web:c4e281d2bfbaef4ab82dcb',

  measurementId: 'G-RKRVS22CP0',
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)

export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)
export const functions = getFunctions(app)
export const auth = getAuth(app)

connectAuthEmulator(auth, 'http://localhost:9099')
connectFunctionsEmulator(functions, 'localhost', 5001)
