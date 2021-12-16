import * as ActionType from "../ActionType"

const InitialState = {
    isLoading : true,
    patients :[],
    errmsg : null
}
export const Patientes = (state = InitialState, action) => {
    console.log(state, action)

    switch (action.type) {
        case ActionType.PATIENT_LOADING:
            return {
                ...state,
                patients: [],
                isLoading: true,
                errmsg: null
            }
        case ActionType.PATIENT_RETRIVED:
            return {
                ...state,
                patients: action.payload,
                isLoading: true,
                errmsg: null
            }
        case ActionType.PATIENT_FAILED:
            return {
                ...state,
                patients: [],
                isLoading: true,
                errmsg: action.payload
            }
        case ActionType.PATIENT_ADD:
            return{
                ...state,
                patients: state.patients.concat(action.payload),
                isLoading: false,
                errmsg: null
            }  
        case ActionType.PATIENT_DELETE:
            return{
                ...state,
                patients:state.patients.filter((p)=>p.id !== action.payload),
                isLoading:false,
                errmsg:null
            } 
        default:
            return state
    }
}
