import { configureStore } from "@reduxjs/toolkit";
import  mainReducer  from "./reducer/main";
import navigateReducer from "./reducer/navigaterReducer";


export const store = configureStore({
  reducer: {
      navigation : navigateReducer,
    },
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;