import { defineStore } from "pinia";

export const userData = defineStore("userData", {
  state: () => {
    return { username: "" };
  },
  actions: {
    setUsername(newUsername) {
      this.username = newUsername;
    },
  },
});
