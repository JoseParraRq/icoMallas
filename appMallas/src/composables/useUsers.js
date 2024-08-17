
import { useUserStore } from "../stores/userStore.js";
import {getAllUserClients} from "../helpers/user.helper"

export const useUsers = async () => {
    const store = useUserStore();
    const users = await getAllUserClients();
    const userStore = useUserStore();
    userStore.usersArray = users;
};