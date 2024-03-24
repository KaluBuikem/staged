import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref({
        isLoggedin: false,
    });

    return { user };
});