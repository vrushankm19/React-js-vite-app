// Import helpers from Redux Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch todos from API
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers", // Action type
  async () => {
    // Call the API
    const response = await fetch("https://dummyjson.com/todos");

    // Convert response to JSON
    const data = await response.json();

    // Return only the todos array (this becomes action.payload)
    return data.todos;
  }
);

// Create a slice for user/todo state
const thunkSlice = createSlice({
  name: "user", // Slice name

  // Initial state of the slice
  initialState: {
    data: [], // Stores todos
    loading: false, // Shows loading status
    error: null, // Stores error message
  },

  // Handle async thunk lifecycle actions
  extraReducers: (builder) => {
    builder

      // When API request starts
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true; // Show loader
        state.error = null; // Clear old errors
      })

      // When API request is successful
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false; // Stop loader
        state.data = action.payload; // Save todos to state
      })

      // When API request fails
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false; // Stop loader
        state.error = action.error.message; // Save error message
      });
  },
});

// Export reducer to use in store
export default thunkSlice.reducer;
