import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initailizeFirebase = () => {
    initializeApp(firebaseConfig);

}
export default initailizeFirebase;