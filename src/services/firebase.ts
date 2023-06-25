// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUVVH3go2PhUV8zfcdSCL6T4yHtr11lkE',
  authDomain: 'casaclick-5ccc2.firebaseapp.com',
  projectId: 'casaclick-5ccc2',
  storageBucket: 'casaclick-5ccc2.appspot.com',
  messagingSenderId: '952255732701',
  appId: '1:952255732701:web:f45ead439fd1129bd53434',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

//exports

export { auth, db, storage }
