<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";
import HeaderComponent from "@/components/HeaderComponent.vue";

const userStore = useUserStore();

onMounted(async () => {
  await userStore.getUsers();
});
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <h2>HOME</h2>

  <ul class="user-list">
    <li v-for="user in userStore.users" :key="user.id">
      <RouterLink
        class="link"
        :to="{ name: 'user-details', params: { id: user.id } }"
      >
        <div class="user-container">
          <h3>{{ user.name }}</h3>
          <h3>{{ user.email }}</h3>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style>
.user-list {
  margin: 0;
  padding: 0;
  list-style: none;

  .link {
    color: black;
    text-decoration: none;
  }

  .user-container {
    background-color: teal;
    padding-left: 20px;
    display: flex;
    gap: 20px;
    border-bottom: 3px solid black;
  }
  .user-container:hover {
    background-color: darkgray;
    cursor: pointer;
  }
}
</style>
