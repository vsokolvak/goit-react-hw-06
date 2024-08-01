import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data/contact.json";

const initialState = {
  items: initialData,
};

const slice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.items.findIndex((contact) => contact.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = state => state.contacts.items

export default slice.reducer