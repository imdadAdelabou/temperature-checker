import { Auth, User, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../configs/firebaseConfig";
import firebase from "firebase/compat/app";
import { FirebaseErrorType } from "../utils/types";
import { APP_CONTENTS } from "../utils/constant";
import { openToast } from "../utils";



class FirebaseAuthService {
    auth: Auth;

    constructor() {
        this.auth = getAuth(app);
    }

    handleAuthError(error: firebase.auth.Error) {
        let message = "";
        // Handle different Firebase authentication errors
        switch (error.code) {
          case 'auth/user-not-found':
            message = APP_CONTENTS.unknowUser;
            break;
          case 'auth/wrong-password':
            message = APP_CONTENTS.incorrectPassword;
            break;
        case 'auth/invalid-login-credentials':
            message = APP_CONTENTS.incorrectCredential;
            break;
          // Add more cases as needed
          default:
            message = APP_CONTENTS.serverError;
        }

        openToast(message, "error");
      }

    async signUp(email: string, password: string): Promise<User | boolean> {
        try {
            const result = await createUserWithEmailAndPassword(this.auth, email, password);

            return result.user;
        } catch (error) {
            this.handleAuthError(error as FirebaseErrorType);
            return false;
        }
    }

    async login(email: string, password: string): Promise<User | boolean> {
        try {
            const result = await signInWithEmailAndPassword(this.auth, email, password);

            return result.user;
        } catch (error) {
            this.handleAuthError(error as FirebaseErrorType);
            return false;
        }
    }
}

const FirebaseAuth = new FirebaseAuthService();

export default FirebaseAuth;