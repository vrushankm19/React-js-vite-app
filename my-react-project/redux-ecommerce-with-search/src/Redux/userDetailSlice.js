import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue}) => {
    const reponse = await fetch("https://65dc684be7edadead7ebeb65.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    try{
        const result = await reponse.json();
        return result;
    } catch (error){
        return rejectWithValue(error);
        console.log(error);
    }
})

// Read Data

export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {
    // console.log("Before fetching data"); // Add this line
    const response = await fetch("https://65dc684be7edadead7ebeb65.mockapi.io/crud");
    try {
        const result = await response.json();
        // console.log("Fetched data:", result);
        return result;  
    } catch (error) {
        return rejectWithValue(error);
        console.log(error);
    }
});


// console.log("New data", showUser)

export const userDetail = createSlice ({
    name: "userDetail",
    initialState: { 
        users: [],
        loading: false,
        error: null,
    },
    reducers:{},
     extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            });
    },
    
})

export default userDetail.reducer;