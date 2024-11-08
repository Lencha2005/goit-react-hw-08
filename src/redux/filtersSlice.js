import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filter: '',
};

export const filtersSlice = createSlice({
    name: 'filter',
    initialState: INITIAL_STATE,
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload;
    },
}});

export const filtersReducer = filtersSlice.reducer;
export const {changeFilter} = filtersSlice.actions;