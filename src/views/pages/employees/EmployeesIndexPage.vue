<template>
  <div class="container bg-ligth">
    <div class="mt-4">
      <div>
        <select v-model="selectGender">
          <option value="0">Все</option>
          <option v-for="gender in sex" :key="gender.id" :value="gender.id">
            {{ gender.gender }}
          </option>
        </select>
        <div v-if="loading">
          <span>Loading...</span>
        </div>
        <div class="row" v-else>
          <div
            v-for="(item, index) of filteredProducts"
            :key="index"
            class="my-4 col-12 col-md-3"
          >
            <router-link
              :to="{ name: 'employees.show', params: { id: item.id } }"
            >
              <div class="card text-dark">
                <div class="card-body">
                  <div class="card-title">
                    {{ item.name }} {{ item.surname }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { employeesService } from "@/services/employeesService";

export default {
  name: "EmployeesIndexPage",
  data() {
    return {
      employees: [],
      loading: false,
      sex: [
        { id: "male", gender: "Male" },
        { id: "female", gender: "Female" },
      ],
      inputSearch: "",
      selectGender: 0,
    };
  },
  created() {
    this.getAllEmployees();
  },
  methods: {
    getAllEmployees() {
      this.loading = true;
      return employeesService
        .getEmployees()
        .then((res) => {
          this.employees = res.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    filteredProducts: function () {
      return (
        this.employees
          // Фильтруем по
          .filter((el) => {
            return this.selectGender == 0 || el.gender == this.selectGender;
          })
      );
    },
  },
};
</script>

<style scoped></style>
