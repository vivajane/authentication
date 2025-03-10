import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User Logged In:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};
export default login;