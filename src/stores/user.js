import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);

  function signIn(user) {
    user.value = user;

    localStorage.setItem("user", JSON.stringify(user));
  }

  function logout() {
    user.value = null;

    localStorage.removeItem("user");
  }

  return { user, signIn, logout };
});
