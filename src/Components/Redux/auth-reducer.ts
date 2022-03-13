import {AuthAPI, HeaderAPI} from "../../API/API";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";
const SET_USER_DATA = "SET-USER-DATA";
const SET_LOGIN = "SET-LOGIN";
let initialState = {
    id: null,
    email: null,
    login: null,
    isLogin: false,
    date: null
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
            debugger
            return {
                ...state,
                date: action.data,
            }
        }

        default:
            return state
    }

}

type SetUserDataT = (id: number, email?: string, login?: string, isLogin?: boolean) => object
export let SetAuthUserData: SetUserDataT = (id, email, login, isLogin) => ({

    type: SET_AUTH_USER_DATA,
    data: {id, email, login, isLogin}
})
export let SetUserData: SetUserDataT = (data: any) => ({

    type: SET_USER_DATA,
    data: data
})
export let SetLogin: SetUserDataT = (id: number) => ({

    type: SET_LOGIN,
    id: id
})
//thunk
export const HeaderLoginThunk = () => {
    return (dispatch: any) => {

        HeaderAPI.AuthMe().then((a: any) => {

            if (a.data.resultCode === 0) {
                let {id, email, login} = a.data.data;
                dispatch((SetAuthUserData(id, email, login, true)))

                HeaderAPI.Login(login).then((b: any) => {

                    b.data.items.filter((u: any) => {
                        if (id === u.id) {
                            dispatch(SetUserData(u))

                        }
                    })

                })
            }
        })

    }
}

export const LoginThunk = (data: any) => {
    return (dispatch: any) => {

        AuthAPI.Login(data).then((response: any) => {

            if (response.data.resultCode === 0) {
                HeaderAPI.AuthMe().then((a: any) => {

                    if (a.data.resultCode === 0) {
                        let {id, email, login} = a.data.data;
                        dispatch((SetAuthUserData(id, email, login, true)))

                        HeaderAPI.Login(login).then((b: any) => {

                            b.data.items.filter((u: any) => {
                                if (id === u.id) {
                                    dispatch(SetUserData(u))

                                }
                            })

                        })
                    }
                })
            }
        })
    }
}

