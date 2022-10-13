// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'

import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBPS5tw6XvTFzr48saXtzFQw331804hiZc',
  authDomain: 'bisch-8cf6b.firebaseapp.com',
  projectId: 'bisch-8cf6b',
  storageBucket: 'bisch-8cf6b.appspot.com',
  messagingSenderId: '364610996469',
  appId: '1:364610996469:web:cef65dd7725dec7084ddbc',
  measurementId: 'G-4PQ1LDBD9G',
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)

export const analytics = getAnalytics(app)
