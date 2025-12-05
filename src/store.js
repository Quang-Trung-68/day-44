import { configureStore } from "@reduxjs/toolkit";
import { demoApi } from "@/services/demo";

const store = configureStore({
  reducer: {
    [demoApi.reducerPath]: demoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    demoApi.middleware,
  ],
});

export { store };
