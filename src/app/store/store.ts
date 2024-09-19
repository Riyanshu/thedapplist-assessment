import { configureStore } from '@reduxjs/toolkit';
import { dapplistApi } from './services';
import projectsReducer from './features/slice';

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        [dapplistApi.reducerPath]: dapplistApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            dapplistApi.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
