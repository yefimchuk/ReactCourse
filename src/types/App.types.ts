export type InitialStateAuthPage = {
    id: number | null;
    email: string | null;
    login: string | null;
    isLogin: boolean;
    date: any;
    captchaURL: string | null;
    errors: string[] | null;
    submitting: boolean
};
export type LoginFormTypes = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
}
export type InitialStateSideBar = {
    friendsData: object;
};
export type InitialStateProfile = {
    ReviewData: object[];
    PersonalData: object;
    Profile: object | null;
    id: number | null;
    isLogin: boolean;
    status: string;
    isLoading: boolean;
    errorMessage: null;
    UserId: number | null;
};
export type InitialStateApp = { initialized: boolean };