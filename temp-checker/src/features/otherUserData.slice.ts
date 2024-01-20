import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OtherUserDataStateType, OtherUserDataType } from "../utils/types";
import axiosClient from "../configs/axiosConfig";

export const getOtherUserData = createAsyncThunk(
  "otherUserData/getOtherUserData",
  async (email: string, thunkAPI) => {
    try {
      const response = await axiosClient.get(`/auth/login/${email}`);

      console.log("OtherData ==> ", response.data["data"]["user"]);
      return response.data["data"]["user"];
    } catch (e) {
      return thunkAPI.rejectWithValue(false);
    }
  }
);

export const updateEngineId = async (email: string, engineId: string) => {
  console.log(email);
  try {
    await axiosClient.put("/user/engineId/" + email, { engineId });

    return true;
  } catch (e) {
    return false;
  }
};

const initialState: OtherUserDataStateType = {
  isLoading: false,
  otherUserData: null,
};

const otherUserDataSlice = createSlice({
  name: "otherUserData",
  initialState,
  reducers: {
    setIsLoading: (
      state: OtherUserDataStateType,
      payload: PayloadAction<boolean>
    ) => {
      state.isLoading = payload.payload;
    },
    setOtherUserData: (
      state: OtherUserDataStateType,
      payload: PayloadAction<OtherUserDataType>
    ) => {
      state.otherUserData = { ...payload.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOtherUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOtherUserData.fulfilled, (state, payload) => {
        state.isLoading = false;

        console.log(payload.payload);
        state.otherUserData = { ...payload.payload };
      })
      .addCase(getOtherUserData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setIsLoading, setOtherUserData } = otherUserDataSlice.actions;
export default otherUserDataSlice.reducer;
