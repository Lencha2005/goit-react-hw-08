import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, editContact, fetchContacts } from "./operations";


const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const INITIAL_STATE = {
    items: null,
    isLoading: false,
    error: null
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
    })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        state.error = null;
    })
    .addCase(deleteContact.rejected, handleRejected)
    .addCase(editContact.pending, handlePending)
    .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.findIndex((item) => item.id !== action.payload.id);
        state.error = null;
    })
    .addCase(editContact.rejected, handleRejected)
});

export const contactsReducer = contactsSlice.reducer;