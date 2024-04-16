import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    // Optionally add custom middleware here
    return getDefaultMiddleware();
  },
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
