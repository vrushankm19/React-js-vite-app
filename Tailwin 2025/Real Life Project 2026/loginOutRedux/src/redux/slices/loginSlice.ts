import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  mobile: string;
}

export interface LoginResponse {
  data: {
    token: string;
    user: User;
  };
  message?: string;
}

interface LoginState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  LoginResponse,
  { mobile: string; password: string },
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://stg.api.nmmc.ptax.foxberry.live/web/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    const data: LoginResponse = await response.json();

    if (!response.ok) {
      return rejectWithValue(data.message || "Login failed");
    }

    localStorage.setItem("token", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));

    return data;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.user = action.payload.data.user;
          state.token = action.payload.data.token;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;