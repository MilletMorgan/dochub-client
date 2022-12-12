<template>
  <div class="py-20">
    <h1 class="text-7xl text-center dark:text-white">Dochub</h1>
  </div>

  <div class="w-8/12 mx-auto shadow-2xl">
<!--
    <Register />
-->
    <Login />
  </div>
</template>

<script>
import Login from "./Login.vue";
import Register from "./Register.vue";
import axios from "axios";

export default {
  name: "Authentication",
  data() {
    return {
      users: [],
    };
  },
  components: { Register, Login },
  async created() {
    try {
      const token = import.meta.env.VITE_API_TOKEN;
      //const token = "6556439ef1489ca5ac7e232f812958370eef6a149a8642ce34800f389324e69d8d5170f7db0fb1da781c5cc5619696bb7b15f9af00f3dee7b52bcb871fa9aae243c8b490a67dbe8e34d7e692c8557e244983c441a590e0ad5a8e4a743bc880cb7d03b8a39136a04eb997699b1aa08743b9ad87c4bdf1ae78c2997520b9cbc2b3";

      this.users = await axios.get("http://localhost:1337/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
