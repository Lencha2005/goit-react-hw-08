import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = state => state.filters.filter;

export const selectFilteredContacts = createSelector(
        [selectContacts, selectFilter],
        (contacts, filter) => contacts.filter(contact => {
            return (
                contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                contact.number.includes(filter))
        })
    )