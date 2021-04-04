import { apiService } from "./apiService";

export const employeesService = {
  getEmployees() {
    return apiService.get("employees");
  },
  getEmploy(id) {
    return apiService.get(`employees/${id}`);
  },
};
