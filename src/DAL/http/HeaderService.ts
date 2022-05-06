import axios from "axios";

class HeaderService {
    Login(login: string): Promise<any> {
        return axios.get(`users?term=${login}`).then((response: any) => {
            return response;
        });
    }

    AuthMe(): Promise<any> {
        return axios
            .get(`auth/me`, {
                withCredentials: true,
            })
            .then((response) => {
                return response;
            });
    }
}
const headerServiceInstance = new HeaderService()
export default headerServiceInstance
