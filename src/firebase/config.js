import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Replace these placeholder values with your Firebase project credentials.
// Steps:
//   1. Go to https://console.firebase.google.com
//   2. Create a project (or open existing one)
//   3. Click "Add app" -> Web
//   4. Copy the firebaseConfig object here
//   5. In Firestore Database, create a collection named "contacts"
const firebaseConfig = {
  apiKey: "AIzaSyBgjoPUUjpNgXc4gBqQru7UDshxCx0sgZk",
  authDomain: "my-portfolio-9f83b.firebaseapp.com",
  projectId: "my-portfolio-9f83b",
  storageBucket: "my-portfolio-9f83b.firebasestorage.app",
  messagingSenderId: "182437121342",
  appId: "1:182437121342:web:97f90d1f7c7faa9ec0b06f",
  measurementId: "G-SPF4H2BW13"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
