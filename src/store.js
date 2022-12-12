import { defineStore } from "pinia";

export const useUserStore = defineStore("store", {
  state: () => ({
    user: {
      loggedIn: false,
      data: null,
    },
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setLoggedIn(value) {
      this.user.loggedIn = value;
    },
    setUser(user) {
      this.user.data = user;
    },
  },
});
