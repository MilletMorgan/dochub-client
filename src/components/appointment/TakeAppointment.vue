<template>
  <h1 class="text-center text-2xl pt-12">Take appointment</h1>

  <p v-for="doctor in doctors" :key="doctor.name">
    name: {{ doctor.name }}<br>
    age: {{ doctor.age }}
  </p>
  {{ doctors }}
</template>

<script setup>
//import { useUserStore } from "../../store.js";
import { db } from "../../firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { onMounted, ref } from "vue";

const doctors = ref([]);
// const store = useUserStore();
/*const isLogged = store.getUser.loggedIn;
console.log(store.getUser.loggedIn);*/
onMounted(() => {
  getDoctors();
});

const getDoctors = async () => {
  try {
    const querySnap = await getDocs(query(collection(db, "doctorCollection")));

    querySnap.forEach((doc) => {
      doctors.value.push(doc.data());
    });
    console.log(doctors);
  } catch (e) {
    console.error(e);
  }
};
</script>
