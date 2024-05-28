import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([]);
  const selectedUser = ref(null);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    console.log(data);
    users.value = data;
  };

  const getUser = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    console.log(data);
    selectedUser.value = data;
  };

  return { users, getUsers, selectedUser, getUser };
});
