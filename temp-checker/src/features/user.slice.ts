import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserCustomType, UserStateType } from "../utils/types";
import { onAuthStateChanged } from "firebase/auth";
import FirebaseAuth from "../services/firebaseAuth";
import store from "../store";


const initialState: UserStateType = { isPageLoading: true, user: null };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsPageLoading: (state, action: PayloadAction<boolean>) => {
            state.isPageLoading = action.payload;
        },
        setUser: (state, action: PayloadAction<UserCustomType>) => {
            state.user = { ...action.payload };
        },
    },
});

export const { setIsPageLoading, setUser } = userSlice.actions;
export default userSlice.reducer;

onAuthStateChanged(FirebaseAuth.auth, async (user) => {
    store.dispatch(setIsPageLoading(true));
    if (user) {
        const token = await user.getIdToken();
        const userToPass: UserCustomType = {
            email: user.email!,
            uid: user.uid,
            emailVerified: user.emailVerified,
            accessToken: token,
        };
        store.dispatch(setUser(userToPass));
    }
    store.dispatch(setIsPageLoading(false));
});
