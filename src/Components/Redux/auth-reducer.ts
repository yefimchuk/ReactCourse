const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";
const SET_USER_DATA = "SET-USER-DATA";
const SET_LOGIN = "SET-LOGIN";
const SET_LOG_OUT = "SET-LOG-OUT";
const GET_CAPTCHA = "GET-CAPTCHA";
let initialState = {
  id: null,
};

export const AuthReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case SET_USER_DATA: {
      return {
        ...state,
        date: action.data,
      };
    }
    case GET_CAPTCHA: {
      return {
        ...state,
        captchaURL: action.captcha.data.url,
      };
    }
    case SET_LOG_OUT: {
      return {
        ...state,
        id: null,
        email: null,
        login: null,
        isLogin: false,
        date: null,
      };
    }
    default:
      return state;
  }
};
type SetUserDataT = (
  id: number,
  email?: string,
  login?: string,
  isLogin?: boolean
) => object;
export let SetAuthUserData: SetUserDataT = (id, email, login, isLogin) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login, isLogin },
});
export let SetLogOut = () => ({
  type: SET_LOG_OUT,
});
export let SetUserData: SetUserDataT = (data: any) => ({
  type: SET_USER_DATA,
  data: data,
});
export let GetCaptcha = (captchaURL: any) => ({
  type: GET_CAPTCHA,
  captcha: captchaURL,
});
//thunk
