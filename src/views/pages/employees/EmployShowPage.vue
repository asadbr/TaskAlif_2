<template>
  <div>
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            <div class="d-flex align-items-center bd-highlight mb-3">
              <div class="mr-auto bd-highlight">
                <h5>Информация</h5>
              </div>
              <div class="p-2 bd-highlight">
                <button
                  v-if="!save"
                  @click="save = true"
                  type="button"
                  class="btn btn-sm btn-success"
                >
                  Изменить
                </button>

                <button
                  v-if="save"
                  @click="updateEmploy"
                  type="button"
                  class="btn btn-sm btn-primary"
                >
                  Сохранить
                </button>
                <button
                  v-if="save"
                  @click="cancel"
                  type="button"
                  class="btn btn-sm btn-warning ml-3"
                >
                  Отменить
                </button>
              </div>
              <div class="p-2 bd-highlight">
                <button
                  type="button"
                  class="btn btn-sm btn-danger"
                  @click="deleteEmploy(employ.id)"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
          <div class="form-group">
            <span class="text-muted">Имя и фамилия</span>
            <br />
            <div class="d-flex" v-if="save">
              <input
                type="text"
                v-model="query.name"
                class="form-control mr-2"
              />
              <input type="text" v-model="query.surname" class="form-control" />
            </div>
            <span v-else>{{ employ.name }} {{ employ.surname }}</span>
          </div>
          <div>
            <span class="text-muted">Отдел</span>
            <br />
            <select
              name="name"
              class="form-control"
              v-if="save"
              v-model="query.department"
            >
              <option value="audit">Audit</option>
              <option value="marketing">Marketing</option>
              <option value="IT">IT</option>
            </select>

            <span v-else>{{ employ.department }}</span>
          </div>
          <br />
          <div>
            <span class="text-muted">Должность</span>
            <br />
            <input
              v-if="save"
              type="text"
              v-model="query.position"
              class="form-control"
            />
            <span v-else>{{ employ.position }}</span>
          </div>
          <br />
          <div>
            <span class="text-muted">Пол</span>
            <br />
            <div v-if="save">
              <input
                id="male"
                type="radio"
                v-if="save"
                v-model="query.gender"
                value="male"
              />
              <label for="male">Male</label><br />
              <input
                type="radio"
                id="female"
                v-if="save"
                v-model="query.gender"
                value="female"
              />
              <label for="female">Female</label>
            </div>
            <span v-else>{{ employ.gender }}</span>
          </div>
          <br />
          <div>
            <span class="text-muted">Дата рождение</span>
            <br />
            <input
              v-if="save"
              type="date"
              v-model="query.birthdate"
              class="form-control"
            />
            <span v-else>{{ employ.birthdate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { employeesService } from "@/services/employeesService";
import router from "@/router";
export default {
  name: "EmployeesShowPage",
  props: {
    id: { type: [Number, String], required: true },
  },
  data() {
    return {
      query: {
        name: "",
        surname: "",
        department: "",
        gender: "",
        position: "",
        birthdate: "",
      },
      employ: [],
      save: false,
    };
  },
  created() {
    this.getAllEmploy();
  },
  methods: {
    getAllEmploy() {
      return employeesService.getEmploy(+this.id).then((res) => {
        this.employ = res.data;
        this.query = JSON.parse(JSON.stringify(this.employ));
      });
    },
    deleteEmploy() {
      return employeesService.deleteEmploy(+this.id).then(() => {
        router.push("/employees");
      });
    },
    cancel() {
      this.save = false;
      this.query = JSON.parse(JSON.stringify(this.employ));
    },
    updateEmploy() {
      return employeesService
        .updateEmploy(+this.id, this.query)
        .then((res) => {
          this.query = JSON.parse(JSON.stringify(res.data));
          this.employ = res.data;
        })
        .finally(() => {
          this.save = false;
        });
    },
  },
};
</script>

<style scoped></style>
