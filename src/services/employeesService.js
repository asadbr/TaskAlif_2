import { apiService } from "./apiService";

export const employeesService = {
  getEmployees() {
    return apiService.get("employees");
  },
  getEmploy(id) {
    return apiService.get(`employees/${id}`);
  },
  updateEmploy(id, params) {
    return apiService.put(`employees/${id}`, params);
  },
  deleteEmploy(id) {
    return apiService.delete(`employees/${id}`);
  },
};
