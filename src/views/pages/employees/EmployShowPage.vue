<template>
  <div>
    <ModalUpdate />
    <div class="container mt-4">
      <div class="card">
        <div class="card-body col-12 col-md-12">
          <div class="card-title" v-for="(item, index) of employ" :key="index">
            {{ item }}
          </div>
          <div class="d-flex justify-content-end">
            <div class="mr-2">
              <button
                type="button"
                class="btn btn-success"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Изменить
              </button>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteEmploy(employ.id)"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { employeesService } from "@/services/employeesService";
import ModalUpdate from "@/views/components/modal/ModalUpdate";
import router from "@/router";
export default {
  name: "EmployeesShowPage",
  components: { ModalUpdate },
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
    deleteEmploy() {
      return employeesService.deleteEmploy(+this.id).then(() => {
        router.push("/employees");
      });
    },
  },
};
</script>

<style scoped></style>
