const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";
const SET_USER_DATA = "SET-USER-DATA";
let initialState = {
    id: null,
    email: null,
    login: null,
    isLogin: false,
    date: null/*{
        name: "",
        photos: {
            large: ""
        }
    }*/
}


export const AuthReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isLogin: true,

            }
        }
        case SET_USER_DATA: {

            return {
                ...state,
                date: action.data,
            }
        }
        default:
            return state
    }

}

type SetUserDataT = (id: number, email: string, login: string) => object
export let SetAuthUserData: SetUserDataT = (text, email, login) => ({

    type: SET_AUTH_USER_DATA,
    data: {text, email, login}
})
export let SetUserData: SetUserDataT = (data: any) => ({

    type: SET_USER_DATA,
    data: data
})



