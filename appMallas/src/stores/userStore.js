import { defineStore } from "pinia"
import { ref } from "vue"
export const useUserStore = defineStore('users', () => {
   const  usersArray = ref([]);
    const setUsers = (users) => {
        usersArray.value = users;
    }
    return { usersArray, setUsers }
})