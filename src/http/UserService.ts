import axios from "axios";

axios.interceptors.request.use((config: any) => {
  config.baseURL = "https://social-network.samuraijs.com/api/1.0";
  config.headers = {
    "API-KEY": "d6c95276-5014-4760-bbd2-f4380dffa641",
  };
  config.withCredentials = true;

  return config;
});

class UserService {
  GetUsers(pageSize: number): Promise<any> {
    return axios
      .get(`users`, {
        params: {
          count: pageSize,
        },
      })
      .then((response) => {
        return response.data;
      });
  }

  OnPageUsersChange(currentPage: number, pageSize: number): Promise<any> {
    return axios.get(`users`, {
      withCredentials: true,
      params: {
        page: currentPage,
        count: pageSize,
      },
    });
  }

  Unfollow(id: number): Promise<any> {
    return axios
      .delete(`follow/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  async Follow(id: number): Promise<any> {
    let response = await axios.post(`follow/${id}`, {});
    return response.data;
  }

  async SetMyId(userId: number): Promise<any> {
    return axios.get(`profile/${userId}`, {});
  }
}

const userServiceInstance = new UserService();
export default userServiceInstance;

class HeaderAPI {
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

class ProfileAPI {
  SetStatus(id: number) {
    return axios.get(`profile/status/${id}`);
  }

  UpdateStatus(status: string) {
    return axios.put(`profile/status`, { status: status });
  }
}

class AuthAPI {
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
