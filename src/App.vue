<template>
  <div class="h-screen bg-gray-100 dark:bg-slate-900">
    <div class="grid grid-cols-12">
      <div class="col-span-2 shadow h-screen">
        <div class="ml-5 mt-10">
          <h1 class="text-4xl mb-10">Dochub</h1>
          <ul class="">
            <li class="mb-5">
              <router-link :to="{name: 'takeAppointment'}" class="text-blue-400 hover:text-blue-500">
                Prendre un rendez-vous
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'myAppointments'}" class="text-blue-400 hover:text-blue-500">Mes rendez-vous
              </router-link>
            </li>
          </ul>
        </div>

      </div>
      <div class="col-span-10">
        <router-view />
      </div>
    </div>

    <div class="absolute top-0 right-0 m-5">
      <button @click="toggleDark()" class="px-4 py-2 text-purple-600">
        <svg
          v-if="isDark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clip-rule="evenodd"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { useUserStore } from "./store.js";
//import { useRouter } from "vue-router";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const store = useUserStore();
//const router = useRouter();

//const isLogged = store.getUser.loggedIn;
console.log(store.getUser.loggedIn);
//if (!isLogged)
// router.push({ name: "login" });
</script>
