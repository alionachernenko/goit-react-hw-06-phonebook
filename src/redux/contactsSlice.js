import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = {list: []}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action){
                state.list.push(action.payload)
            },
            prepare(name, phone){
                return {
                    payload: {
                        id: nanoid(),
                        name, phone
                    }
                }
            }
        },
        removeContact: {
            reducer(state, action){
            const index = state.list.findIndex(contact => contact.id === action.payload);
            state.list.splice(index, 1)},
            prepare(id){
                return {
                    payload: id
                }
            }
        }
    }
})

export const {addContact, removeContact} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
export const getContacts = (state) => state.contacts.list