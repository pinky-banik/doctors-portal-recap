

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAOX1_cQikh4-ueMlra2JIwQjTOslE2_uY",

  authDomain: "doctors-gateway.firebaseapp.com",

  projectId: "doctors-gateway",

  storageBucket: "doctors-gateway.appspot.com",

  messagingSenderId: "497087892680",

  appId: "1:497087892680:web:d3de16f79e2f553746e9fd",

  measurementId: "G-ZDHBNFE7GV"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
