import { createRouter, createWebHistory } from "vue-router";
import TakeAppointment from "../components/appointment/TakeAppointment.vue";
import MyAppointments from "../components/appointment/MyAppointments.vue";
import Login from "../components/authentication/Login.vue";
import Authentication from "../components/authentication/Authentication.vue";

const index = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Authentication
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/authentication",
      name: "authentication",
      component: Authentication,
    },
    // Appointment
    {
      path: "/take-appointment",
      name: "takeAppointment",
      component: TakeAppointment,
    },
    {
      path: "/my-appointments",
      name: "myAppointments",
      component: MyAppointments,
    },
  ],
});

export default index;
