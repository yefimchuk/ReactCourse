import {HeaderLoginThunk} from "./auth-reducer";

const INITIALIZING_WAS_SUCCESS = "INITIALIZING-WAS-SUCCESS"
let initialState = {
    initialized: false
}


export const AppReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case INITIALIZING_WAS_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }

}

export let initializingWasSuccess = () => ({
    type: INITIALIZING_WAS_SUCCESS,
})
//thunk

export let initializingThunk = () => (dispatch: any) => {
    let auth = dispatch(HeaderLoginThunk())
    Promise.all([auth]).then(() => {
        dispatch(initializingWasSuccess())
    })
}
