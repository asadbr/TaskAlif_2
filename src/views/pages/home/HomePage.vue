<template>
  <div>
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <div class="card-title"></div>
          <div class="form-group">
            <span class="text-muted"
              ><b>Количество Содрудников:</b> {{ employees.length }}</span
            >
            <br />
            <span class="text-muted"
              ><b>Количество Мужчин:</b> {{ countMans() }}</span
            >
            <br />
            <span class="text-muted"
              ><b>Количество Женшин:</b> {{ countWomans() }}</span
            >
            <br />
            <span class="text-muted"
              ><b>Количество Сотрудников в отдел Айти:</b>
              {{ countITDepartment() }}
            </span>
            <br />
            <span class="text-muted">
              <b>Количество Сотрудников в отдел Бухгалтерия:</b>
              {{ countAuditDepartment() }}
            </span>
            <br />
            <span class="text-muted"
              ><b>Количество Сотрудников в отдел Маркетинг:</b>
              {{ countMarketingDepartment() }}
            </span>
            <br />
            <span class="text-muted"
              ><b>Средний Возраст Сотрудников:</b>
              {{ countMidOld() }}
            </span>
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
    countMidOld() {
      var sum = 0;
      for (let item of this.employees) {
        var Date1 = new Date(item.birthdate);
        var Date2 = new Date();
        var Days = Math.floor(
          Math.abs((Date2.getTime() - Date1.getTime()) / (1000 * 3600 * 24))
        );
        sum = sum + Days;
      }
      return Math.floor(sum / 360 / this.employees.length);
    },
  },
};
</script>

<style scoped></style>
