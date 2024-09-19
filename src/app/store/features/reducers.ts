import { PayloadAction } from '@reduxjs/toolkit';
import { ProjectsSliceState } from './state';

const reducers = {
    updateCategories: (
        state: ProjectsSliceState, { payload }: PayloadAction<string[]>
    ) => {
        state.categories = payload;
    },
    updateChain: (
        state: ProjectsSliceState, { payload }: PayloadAction<string | null>
    ) => {
        state.chain = payload;
    },
};

export default reducers;
