import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../../Service/service.commondata";
import { getOrderList } from "../../../Service/service.dashboard";


interface UsersState {
  value: []
  tripDispatchedID?: {}
  user: any[]
  order: any[]
  saveTripAsDraft:[]
  TripAsDraft:[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}
const initialState: UsersState = {
  value: [],
  status: "idle",
  tripDispatchedID: {},
  user:[],
  order:[],
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
        console.log('action',action);
        state.status = "idle";
        state.user = action?.payload?.data.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getOrderList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrderList.fulfilled, (state, action) => {
        state.status = "idle";
        state.order = action?.payload?.data?.payload
      })
      .addCase(getOrderList.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { tripDispatched, addZoneData } = commonDataSlice.actions
export default commonDataSlice.reducer;
