import axios from "axios";

class AuthService {
    Login(data: any) {
        return axios.post("auth/login", {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha,
        });
    }

    LogOut() {
        return axios.delete("auth/login");
    }

    GetCaptcha() {
        return axios.get("security/get-captcha-url");
    }
}

const authServiceInstance = new AuthService()
export default authServiceInstance;