import { createSlice } from "@reduxjs/toolkit";

export const assistanceSlice = createSlice({
    name: "assistance",
    initialState: {
        assistants: [],
        fieldObject: {},
        total: 0,
        isLoading: true,
        isForm: false,
        option:"",
        button:""
    },
    reducers: {
        setAssistance: (state, action) => {
            const {assistants, total} = action.payload
            state.assistants = assistants;
            state.total = total
            state.isLoading = false
        },
        setAssistant: (state, action) => {
            const {fieldObject, option, button} = action.payload
            state.fieldObject = fieldObject;
            state.option = option;
            state.button = button;
        },
        showForm: (state, action) => {
            state.isForm = !state.isForm
        },
        setLoading: (state, action)=>{
            state.isLoading = true;
        }
        
    }
})

export const {setAssistance, showForm, setAssistant, setLoading} = assistanceSlice.actions