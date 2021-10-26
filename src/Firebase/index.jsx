import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCr3dKwNoFWRV2rTjZkxLIxpy3jF2ModNc",
  authDomain: "todo-app-95eec.firebaseapp.com",
  projectId: "todo-app-95eec",
  storageBucket: "todo-app-95eec.appspot.com",
  messagingSenderId: "741618778321",
  appId: "1:741618778321:web:c7d9be94fb0564263945f0"
}

firebase.initializeApp(firebaseConfig)

export default firebase