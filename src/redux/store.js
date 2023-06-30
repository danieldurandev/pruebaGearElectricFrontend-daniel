import { assistanceSlice } from "./assistance/assistanceSlice";

import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        assistance: assistanceSlice.reducer
    }
})