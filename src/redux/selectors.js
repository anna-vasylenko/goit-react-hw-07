import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectNameFilter = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filteredData = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredData;
  }
);
