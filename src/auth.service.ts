import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "./firebaseConfig"; // Import Firebase app

const auth = getAuth(firebaseApp);

export async function login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
