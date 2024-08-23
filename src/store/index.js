import { configureStore } from "@reduxjs/toolkit";
import passengerReducer from "../features/passengers/passengerSlice";

export const store = configureStore({
  reducer: {
    passengers: passengerReducer,
  },
});
