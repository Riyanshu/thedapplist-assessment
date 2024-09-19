export interface ProjectsSliceState {
    categories: string[];
    chain: string | null;
}

export const initialState: ProjectsSliceState = {
    categories: [],
    chain: null,
};