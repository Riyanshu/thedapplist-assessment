import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import reducers from './reducers';

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers,
});

export const selectCategories = (state: RootState) => state.projects.categories;
export const selectChain = (state: RootState) => state.projects.chain;

export const {
    updateCategories,
    updateChain,
} = projectsSlice.actions;

export default projectsSlice.reducer;
