import assistanceApi from "../../api/assistanceApi";
import { setAssistance, setAssistant, setLoading, showForm } from "./assistanceSlice";

export const getAllAssistance = ({names = "", last_names = "", email  = "", id_number = ""}) => {
    return async (dispatch)=>{
        const {data} = await assistanceApi.get(`?names=${names}&last_names=${last_names}&email=${email}&id_number=${id_number}`)
        dispatch(setLoading())
        dispatch(setAssistance(data))
    }
}

// export const updateAssistant = (assistant) => {
//     return async (dispatch)=>{
//         const {data} = await assistanceApi.patch("", assistant)
//         dispatch(setAssistance(data))
//     }
// }

export const togleForm = () => {
    return async (dispatch)=>{
        dispatch(showForm())
    }
}

export const setForm = (payload) => {
    return async (dispatch)=>{
        dispatch(setAssistant(payload))
    }
}
