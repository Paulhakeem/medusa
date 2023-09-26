
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAmaeQsvTcmnuPllBlQIiSpTTwQi9CmEG0",
  authDomain: "medusa-815f2.firebaseapp.com",
  projectId: "medusa-815f2",
  storageBucket: "medusa-815f2.appspot.com",
  messagingSenderId: "900419110379",
  appId: "1:900419110379:web:330c9ac57a0c6ac10e05ae",
  measurementId: "G-YB0QH5KHH9"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {
    auth,
}
