import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDj_MC7TXuJMsbmKvc0UueC9HTzfcWrfjg",
    authDomain: "bakery-manager-12.firebaseapp.com",
    projectId: "bakery-manager-12",
    storageBucket: "bakery-manager-12.appspot.com",
    messagingSenderId: "148376328541",
    appId: "1:148376328541:web:bba322d26f13bb05e6b0b4",
    measurementId: "G-5NP6BKRYRD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { analytics, auth, firestore, storage }