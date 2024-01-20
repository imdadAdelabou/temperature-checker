import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginDataBodyType } from "../utils/types";
import FirebaseAuth from "../services/firebaseAuth";
import { User } from "firebase/auth";

const loginAuth = createAsyncThunk<User, LoginDataBodyType>(
    "auth/loginAuth",
    async (data: LoginDataBodyType, thunkAPI) => {
        const result = await FirebaseAuth.login(data.email, data.password);

        if (typeof result === "boolean") {
            return thunkAPI.rejectWithValue(false);
        }
        return result;
    }
);

const initialState = { isLoading: false };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginAuth.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginAuth.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export { loginAuth };
export default authSlice.reducer;
