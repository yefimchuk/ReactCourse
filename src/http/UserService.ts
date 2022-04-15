import axios from "axios";

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

  Follow(id: number): Promise<any> {
    return axios.post(`follow/${id}`, {}).then((response) => {
      return response.data;
    });
  }

  SetMyId(userId: number): Promise<any> {
    return axios.get(`profile/${userId}`, {});
  }
}
const userServiceInstance = new UserService();
export default userServiceInstance;


