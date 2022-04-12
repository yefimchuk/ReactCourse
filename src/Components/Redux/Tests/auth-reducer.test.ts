import {
  AuthReducer,
  GetCaptcha,
  SetAuthUserData,
  SetLogOut,
} from "../auth-reducer";

let state = {
  id: null,
  email: null,
  login: null,
  isLogin: false,
  date: null,
  captchaURL: null,
};

it("email should be free@gmail.com ", function () {
  let action = SetAuthUserData(1, "free@gmail.com", "dima", true);
  let newState = AuthReducer(state, action);
  expect(newState.email).toBe("free@gmail.com");
});

it("login should be null", function () {
  let action = SetLogOut();
  let newState = AuthReducer(state, action);
  expect(newState.login).toBe(null);
});

it("WaitingFollow length should be 1 when u following", function () {
  let action = GetCaptcha({ data: { url: "url" } });

  let newState = AuthReducer(state, action);
  expect(newState.captchaURL).toBe("url");
});
