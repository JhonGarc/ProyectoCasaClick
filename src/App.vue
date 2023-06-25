<script>
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import 'firebase/auth'
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUVVH3go2PhUV8zfcdSCL6T4yHtr11lkE',
  authDomain: 'casaclick-5ccc2.firebaseapp.com',
  projectId: 'casaclick-5ccc2',
  storageBucket: 'casaclick-5ccc2.appspot.com',
  messagingSenderId: '952255732701',
  appId: '1:952255732701:web:f45ead439fd1129bd53434',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities')
  const citySnapshot = await getDocs(citiesCol)
  const cityList = citySnapshot.docs.map((doc) => doc.data())
  return cityList
}
const auth = getAuth(app)

//exports

export { app }
</script>
<template>
  <router-view></router-view>
</template>

<style></style>
