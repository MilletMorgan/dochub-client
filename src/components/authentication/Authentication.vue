<template>
  <div class="w-8/12 mx-auto shadow-2xl pt-10">
    <!--
    <Register />
-->
    <Login />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "../../store.js";
import { useRouter } from "vue-router";
import Login from "./Login.vue";
import { storeToRefs } from "pinia";

const store = useUserStore();
const router = useRouter();
const isLogged = ref(false);

const { isLoggedIn } = storeToRefs(store);

onMounted(() => {
  checkIfLogged();
});

const checkIfLogged = () => {
  isLogged.value = store.getUser.loggedIn;

  !isLoggedIn
    ? router.push({ name: "authentication" })
    : router.push({ name: "myAppointments" });
};
</script>
