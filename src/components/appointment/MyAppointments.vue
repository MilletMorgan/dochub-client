<template>
  <h1 class="text-center text-4xl pt-12 mb-20 dark:text-white font-bold">
    Mes rendes-vous
  </h1>

  <div v-for="{ id, appointmentDate, doctorData } in myAppointments" :key="id">
    <div class="shadow w-6/12 mx-auto p-10 mb-10 dark:bg-white dark:shadow-2xl">
      <div class="grid grid-cols-12">
        <div class="col-span-1">
          <img src="https://picsum.photos/50" alt="profile" class="rounded" />
        </div>
        <div class="col-span-11 pl-5">
          <p class="font-bold">Dr. {{ doctorData.fullname }}</p>
          <p>appointment date: {{ appointmentDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { onMounted, ref } from "vue";

const myAppointments = ref([]);

onMounted(() => {
  getMyAppointments();
});

const getMyAppointments = async () => {
  try {
    const querySnap = await getDocs(
      query(
        collection(db, "appointment"),
        where("userId", "==", "Sopb3vqqNmV8LIpf3fgdR7rq7fr1")
      )
    );

    const appointments = [];
    querySnap.forEach((document) => {
      appointments.push({
        ...document.data(),
        id: document.id,
      });
    });

    myAppointments.value = await Promise.all(
      appointments.map(async (data) => {
        const doctor = await getDoc(doc(db, "doctors", data.doctorId));
        return { ...data, doctorData: doctor.data() };
      })
    );
  } catch (e) {
    console.error(e);
  }
};
</script>
