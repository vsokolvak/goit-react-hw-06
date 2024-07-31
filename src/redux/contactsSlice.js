import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data/contact.json";

const initialState = {
  items: initialData,
};

const slice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        contactAdd( state , action) { 
          state.items.push(action.payload); 
        },
        contactDelete( state, action) {
          state.items = action.payload
        }
    }
})

export const { contactAdd, contactDelete } = slice.actions;

export default slice.reducer