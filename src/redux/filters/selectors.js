import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = state => state.filters.filter;

export const selectFilteredContacts = createSelector(
        [selectContacts, selectFilter],
        (contacts, filter) => {
            if (!contacts || !filter) {
                return; // Повертаємо пустий масив, якщо `contacts` ще не завантажено
            }

            contacts.filter(contact => {
            return (
                contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                contact.number.includes(filter))
        })}
    )