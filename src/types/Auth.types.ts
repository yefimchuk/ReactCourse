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