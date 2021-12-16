import * as ActionType from "../ActionType"

const InitialState = {
    isLoading: true,
    medicines: [],
    errmsg: null
}

export const Medicines = (state = InitialState, action) => {
    console.log(state, action)
    switch (action.type) {

        case ActionType.MEDICINES_LOADING:
            return {
                ...state,
                medicines: [],
                isLoading: true,
                errmsg: null
            }
        case ActionType.MEDICINES_RETRIEVED:
            return {
                ...state,
                medicines: action.payload,
                isLoading: true,
                errmsg: null
            }
        case ActionType.MEDICINES_DELETE:
            return {
                ...state,
                medicines: state.medicines.filter((m) => m.id !== action.payload),
                isLoading: false,
                errMsg: null
            }
        case ActionType.MEDICINES_UPDATE:
            return {
                ...state,
                medicines: state.medicines.map((m) => {
                    if (m.id === action.payload.id) {
                        return action.payload
                    } else {
                        return m
                    }
                }),
                isLoading: false,
                errmsg: null
            }
        case ActionType.MEDICINES_ADD:
            return {
                ...state,
                medicines: state.medicines.concat(action.payload),
                isLoading: false,
                errmsg: null
            }
        case ActionType.MEDICINES_FAILED:
            return {
                ...state,
                medicines: [],
                isLoading: true,
                errmsg: action.payload
            }


        default:
            return state
    }
}