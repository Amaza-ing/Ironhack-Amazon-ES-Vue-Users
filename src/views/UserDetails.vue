<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import HeaderComponent from "@/components/HeaderComponent.vue";

const route = useRoute();

const userStore = useUserStore();

onMounted(() => {
  const id = route.params.id;
  userStore.getUser(id);
});

watch(
  () => route.params.id,
  () => {
    const id = route.params.id;
    userStore.getUser(id);
  }
);
</script>

<template>
  <HeaderComponent></HeaderComponent>

  <section v-if="userStore.selectedUser" class="user-details">
    <h2>{{ userStore.selectedUser.name }}</h2>
    <h3>{{ userStore.selectedUser.email }}</h3>
    <h3>{{ userStore.selectedUser.phone }}</h3>
    <h3>{{ userStore.selectedUser.website }}</h3>
  </section>

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
.user-details {
  margin-bottom: 200px;
}
</style>
