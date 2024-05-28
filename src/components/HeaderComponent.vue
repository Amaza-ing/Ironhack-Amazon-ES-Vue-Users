<script setup></script>

<template>
  <header class="header">
    <h1>Bienvenido a la página de usuarios</h1>
    <RouterLink class="link" :to="{ name: 'home' }">Ir a Home</RouterLink>
  </header>
</template>

<style>
.header {
  background-color: blue;
  color: white;

  .link {
    color: white;
  }
}
</style>
