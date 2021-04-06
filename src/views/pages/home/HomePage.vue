<template>
  <div class="row">
    <div class="col-12 col-lg-4 mt-4">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="text-muted mb-2">Количество Содрудников</h6>
              <span class="h4 mb-0"> {{ employees.length }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mt-4">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="text-muted mb-2">Количество Мужчин</h6>
              <span class="h4 mb-0"> {{ countMans() }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mt-4">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="text-muted mb-2">Количество Женщин</h6>
              <span class="h4 mb-0"> {{ countWomans() }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mt-3">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="text-muted mb-2">Отдел Айти</h6>
              <span class="h4 mb-0"> {{ countITDepartment() }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mt-3">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="text-muted mb-2">Отдел Бухгалтерия</h6>
              <span class="h4 mb-0"> {{ countAuditDepartment() }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mt-3">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="text-muted mb-2">Отдел Маркетинг</h6>
              <span class="h4 mb-0"> {{ countMarketingDepartment() }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mt-3">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="text-muted mb-2">Средний Возраст Сотрудников</h6>
              <span class="h4 mb-0"> {{ countMidOld() }} </span>
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
