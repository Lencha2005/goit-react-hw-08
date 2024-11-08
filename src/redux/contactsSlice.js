import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectContacts, selectFilter } from "./selectors";

const handlePending = (state) => {
    state.loading = true;
  };
  
  const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
  };

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        state.error = null;
    })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        state.error = null;
    })
    .addCase(deleteContact.rejected, handleRejected)
});

export const contactsReducer = contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase())
    })
)