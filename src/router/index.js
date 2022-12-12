import { createRouter, createWebHistory } from "vue-router";
import TakeAppointment from "../components/appointment/TakeAppointment.vue";
import Login from "../components/authentication/Login.vue";

const index = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Authentication
/*    {
      path: "/login",
      name: "login",
      component: Login,
    },*/
    // Appointment
    {
      path: "/",
      name: "takeAppointment",
      component: TakeAppointment,
    },
  ],
});

export default index;
