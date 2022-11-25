<template>
  <div class="py-20">
    <h1 class="text-7xl text-center text-white">Dochub</h1>
  </div>

  <div class="grid grid-cols-2 w-8/12 mx-auto shadow-2xl">
    <Register />
    <Login />
  </div>
</template>

<script>
import Login from "./Login.vue";
import Register from "./Register.vue";

export default {
  name: "Authentication",
  components: { Register, Login },
};
</script>
