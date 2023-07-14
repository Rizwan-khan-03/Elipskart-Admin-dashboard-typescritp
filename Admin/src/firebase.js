
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_c0esW0ga1JX8PHWeDQ_Mge6vYlVZeoY",
  authDomain: "uploadimage-c7e5f.firebaseapp.com",
  projectId: "uploadimage-c7e5f",
  storageBucket: "uploadimage-c7e5f.appspot.com",
  messagingSenderId: "690685872843",
  appId: "1:690685872843:web:ba7f572dc6ba9d35f4e94e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);