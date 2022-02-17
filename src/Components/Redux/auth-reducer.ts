const SET_USER_DATA = "SET-USER-DATA";
let initialState = {
    id: null,
    email: null,
    login: null
}


export const AuthReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        case SET_USER_DATA: {
            debugger
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }

}

type SetUserDataT = (id: number, email: string, login: string) => object
export let SetUserData: SetUserDataT = (text, email, login) => ({

    type: SET_USER_DATA,
    data: {text, email, login}
})


