import axios from "axios";

class ProfileService {
  SetStatus(id: number) {
    return axios.get(`profile/status/${id}`);
  }

  UpdateStatus(status: string) {
    return axios.put(`profile/status`, {status: status});
  }

  UpdateProfile(data: object) {
    return axios.put(`profile`, data);
  }
  UpdatePhoto(data: any) {
    let formData = new FormData();
    formData.append("image", data)
    return axios.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

}
const profileServiceInstance = new ProfileService();
export default profileServiceInstance;
