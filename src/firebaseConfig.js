
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFLqep-GQPVWCotiq-3t0I0OclrWwW4Ck",
  authDomain: "react-cd-battigelli.firebaseapp.com",
  projectId: "react-cd-battigelli",
  storageBucket: "react-cd-battigelli.appspot.com",
  messagingSenderId: "174437476793",
  appId: "1:174437476793:web:7087d9c66d36e90480ee68"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);