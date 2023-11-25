import { Auth, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../configs/firebaseConfig";


class FirebaseAuthService {
    auth: Auth;

    constructor() {
        this.auth = getAuth(app);
    }

    async signUp(email: string, password: string) {
        try {
            const result = await createUserWithEmailAndPassword(this.auth, email, password);

            return result.user;
        } catch (error) {
            return error;
        }
    }
}

const FirebaseAuth = new FirebaseAuthService();

export default FirebaseAuth;