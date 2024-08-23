import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passengers: [],
  capacity: 30,
};

const passengerSlice = createSlice({
  name: "passengers",
  initialState,
  reducers: {
    addPassenger: (state, action) => {
      if (state.passengers.length < state.capacity) {
        state.passengers.push(action.payload);
      } else {
        alert("No hay más asientos disponibles.");
      }
    },
    editPassenger: (state, action) => {
      const { rut, updatedData } = action.payload;
      const index = state.passengers.findIndex((p) => p.rut === rut);
      if (index !== -1) {
        state.passengers[index] = {
          ...state.passengers[index],
          ...updatedData,
        };
      }
    },
    deletePassenger: (state, action) => {
      state.passengers = state.passengers.filter(
        (p) => p.rut !== action.payload
      );
    },
  },
});

export const { addPassenger, editPassenger, deletePassenger } =
  passengerSlice.actions;
export default passengerSlice.reducer;
