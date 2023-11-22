import { configureStore } from "@reduxjs/toolkit";
import navigateReducer from "./reducer/navigaterReducer";
import themeReducer from "./reducer/themeReducer";


export const store = configureStore({
  reducer: {
      navigation : navigateReducer,
      theme : themeReducer,
    },
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;