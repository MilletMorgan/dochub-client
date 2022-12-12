<template>
  <div class="py-5 px-4 bg-white rounded-tr rounded-br">
    <h3 class="text-2xl font-bold mb-6">Connexion</h3>

    <form @submit.prevent="login">
      <div class="mb-6">
        <label class="grid grid-cols-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 col-span-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <span class="col-span-10">Email</span>

          <input
            type="email"
            name="email"
            id="email"
            v-model="user.email"
            class="input-text"
          />
        </label>
      </div>

      <label class="grid grid-cols-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 col-span-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
          />
        </svg>

        <span class="col-span-10">Mot de passe</span>
        <input
          type="password"
          name="password"
          id="password"
          class="input-text"
          v-model="user.password"
        />
      </label>

      <button type="submit" class="btn-primary">Se connecter</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserStore } from "../../store.js";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const store = useUserStore();
    const user = ref({
      email: "",
      password: "",
    });
    const router = useRouter()

    const login = async () => {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          user.value.email,
          user.value.password
        );

        store.setUser(response.user);
        store.setLoggedIn(true);

        router.push({ name: "takeAppointment" });
      } catch (error) {
        console.error(error);
      }
    };

    return {
      user,
      login,
      store,
    };
  },
});
</script>
