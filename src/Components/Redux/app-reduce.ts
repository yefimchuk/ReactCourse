import {HeaderLogin} from "../../BLL/Auth/authSlice";

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

