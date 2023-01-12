import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDaf33Kp1y3dUMaH0miqbubqRmFwzFY0_A",
    authDomain: "food-delivery-app-2-a3b9a.firebaseapp.com",
    databaseURL: "https://food-delivery-app-2-a3b9a-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-2-a3b9a",
    storageBucket: "food-delivery-app-2-a3b9a.appspot.com",
    messagingSenderId: "854307008056",
    appId: "1:854307008056:web:935fca2d5a91bad72380cd"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };