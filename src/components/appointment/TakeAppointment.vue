<template>
  <h1 class="text-center text-2xl pt-12 mb-20">Prendre un rendez-vous</h1>

  <div v-for="{ id, fullname, address } in doctors" :key="id">
    <form @submit.prevent="takeAppointment(id)">
      <div class="shadow w-6/12 mx-auto p-10">
        <div class="grid grid-cols-4">
          <div class="col-span-2">
            <p class="text-xl font-bold">Dr. {{ fullname }}</p>
            <p>Address: {{ address }}</p>
          </div>
          <div class="col-span-2">
            <label>
              Selectionnez une date de rendez-vous
              <input
                type="datetime-local"
                step="3600"
                name="appointmentDate"
                id="appointmentDate"
                v-model="appointment.appointmentDate"
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
import { collection, getDocs, query, addDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";

const doctors = ref([]);
const appointment = ref({
  doctorId: "",
  userId: "",
  appointmentDate: "2022-12-12T12:00",
});

const store = useUserStore();
const user = store.getUser.user;
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
  } catch (e) {
    console.error(e);
  }
};
</script>
