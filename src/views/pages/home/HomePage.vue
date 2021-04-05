<template>
  <div>
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <div class="card-title"></div>
          <div class="form-group">
            <span class="text-muted">Количество Содрудников</span>
            <br />
            <div class="d-flex">{{ employees.length }}</div>
            <span class="text-muted">Количество Мужчин</span>
            <br />
            <div class="form-group">
              {{ countMans() }}
            </div>
            <span class="text-muted">Количество Женшин</span>
            <br />
            <div class="form-group">
              {{ countWomans() }}
            </div>
            <span class="text-muted">Количество Сотрудников в отдел Айти </span>
            <br />
            <div class="form-group">
              {{ countITDepartment() }}
            </div>
            <span class="text-muted"
              >Количество Сотрудников в отдел Бухгалтерия
            </span>
            <br />
            <div class="form-group">
              {{ countAuditDepartment() }}
            </div>
            <span class="text-muted"
              >Количество Сотрудников в отдел Маркетинг
            </span>
            <br />
            <div class="form-group">
              {{ countMarketingDepartment() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { employeesService } from "@/services/employeesService";

export default {
  name: "HomePage",
  data() {
    return {
      employees: [],
    };
  },
  created() {
    this.getAllEmployees();
  },
  methods: {
    getAllEmployees() {
      return employeesService.getEmployees().then((res) => {
        this.employees = res.data;
      });
    },
    countMans() {
      let k = 0;
      for (let item of this.employees) {
        if (item.gender === "male") {
          k++;
        }
      }
      return k;
    },
    countWomans() {
      let k = 0;
      for (let item of this.employees) {
        if (item.gender === "female") {
          k++;
        }
      }
      return k;
    },
    countITDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "IT") {
          k++;
        }
      }
      return k;
    },
    countAuditDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "Audit") {
          k++;
        }
      }
      return k;
    },
    countMarketingDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "Marketing") {
          k++;
        }
      }
      return k;
    },
  },
};
</script>

<style scoped></style>
