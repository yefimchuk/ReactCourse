import axios from "axios";

class ProfileService {
  SetStatus(id: number) {
    return axios.get(`profile/status/${id}`);
  }

  UpdateStatus(status: string) {
    return axios.put(`profile/status`, { status: status });
  }
}
const profileServiceInstance = new ProfileService();
export default profileServiceInstance;
