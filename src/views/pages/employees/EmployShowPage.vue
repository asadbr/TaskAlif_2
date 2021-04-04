<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-body col-12 col-md-2">
        <div class="card-title" v-for="(item, index) of employ" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { employeesService } from "@/services/employeesService";

export default {
  name: "EmployeesShowPage",
  props: {
    id: {
      type: Number,
    },
  },

  data() {
    return {
      employ: [],
    };
  },
  created() {
    this.getAllEmploy();
  },
  methods: {
    getAllEmploy() {
      return employeesService.getEmploy(+this.id).then((res) => {
        this.employ = res.data;
      });
    },
  },
};
</script>

<style scoped></style>
