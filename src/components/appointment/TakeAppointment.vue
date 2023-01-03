<template>
  <h1 class="text-center text-4xl pt-12 mb-20 dark:text-white font-bold">
    Prendre un rendez-vous
  </h1>

  <div v-for="{ id, fullname } in doctors" :key="id">
    <form @submit.prevent="takeAppointment(id)">
      <div class="shadow-2xl w-6/12 mx-auto p-10 dark:bg-white mb-10">
        <div class="grid grid-cols-12">
          <div class="col-span-1">
            <img src="https://picsum.photos/50" alt="profile" class="rounded" />
          </div>
          <div class="col-span-5 pl-5">
            <p class="text-xl font-bold">Dr. {{ fullname }}</p>
          </div>
          <div class="col-span-6">
            <label>
              Selectionnez une date de rendez-vous
              <input
                type="datetime-local"
                step="3600"
                name="appointmentDate"
                id="appointmentDate"
                v-model="appointment.appointmentDate"
                class="input-text"
              />
            </label>
          </div>
        </div>

        <button type="submit" class="btn-primary">VALIDER</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from "../../store.js";
import { db } from "../../firebase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { onMounted, ref } from "vue";

const doctors = ref([]);
const appointment = ref({
  doctorId: "",
  userId: "",
  appointmentDate: "2022-12-12T12:00",
});

// const store = useUserStore();
// const user = store.getUser.user;
onMounted(() => {
  getDoctors();
});

const getDoctors = async () => {
  try {
    const querySnap = await getDocs(query(collection(db, "doctors")));

    querySnap.forEach((doc) => {
      doctors.value.push({ ...doc.data(), id: doc.id });
    });
    console.log(doctors);
  } catch (e) {
    console.error(e);
  }
};

const takeAppointment = async (doctorId) => {
  appointment.value.doctorId = doctorId;
  appointment.value.userId = "Sopb3vqqNmV8LIpf3fgdR7rq7fr1";
  //appointment.value.userId = user.id;

  console.log(appointment.value);

  try {
    const colRef = collection(db, "appointment");
    const response = await addDoc(colRef, appointment.value);

    console.log(response);

    let db = await indexedDB.openDatabase("db");
    let tx = db.transaction("store");
    let store = tx.objectStore("store");

    await store.put("value", "key");
    console.log("Put is totally done");
    await tx;
  } catch (e) {
    console.error(e);
  }
};
</script>
