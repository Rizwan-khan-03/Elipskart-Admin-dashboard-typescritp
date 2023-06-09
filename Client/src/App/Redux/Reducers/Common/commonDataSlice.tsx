import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../../Service/service.commondata";


interface UsersState {
  value: []
  tripDispatchedID?: {}
  user: any[]
  saveTripAsDraft:[]
  TripAsDraft:[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}
const initialState: UsersState = {
  value: [],
  status: "idle",
  tripDispatchedID: {},
  user:[],
  saveTripAsDraft:[],
  TripAsDraft:[]
};


const commonDataSlice = createSlice({
  name: "commonData",
  initialState,
  reducers: {
    tripDispatched: (state, action) => {
      state.tripDispatchedID = action?.payload;
    },
    addZoneData: (state, action) => {
      state.value = action?.payload;
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action?.payload?.data.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "failed";
      })
      // .addCase(saveTripAsDraft.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(saveTripAsDraft.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.saveTripAsDraft = action?.payload?.data?.data?.trip;
      // })
      // .addCase(saveTripAsDraft.rejected, (state) => {
      //   state.status = "failed";
      // });
  },
});
export const { tripDispatched, addZoneData } = commonDataSlice.actions
export default commonDataSlice.reducer;
