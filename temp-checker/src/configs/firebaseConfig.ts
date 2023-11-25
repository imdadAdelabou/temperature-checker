import { initializeApp } from 'firebase/app';

const env = import.meta.env;

const firebaseConfig = {
    apiKey: env.VITE_REACT_API_KEY,
  authDomain: env.VITE_REACT_AUTH_DOMAIN,
  projectId: env.VITE_REACT_PROJECT_ID,
  storageBucket: env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId: env.VITE_REACT_MESSAGING_SENDER_ID,
  appId: env.VITE_REACT_APP_ID,
  measurementId: env.VITE_REACT_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export default app;