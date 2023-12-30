import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({ name: "Eduardo" });

  return {
    user,
  };
});
