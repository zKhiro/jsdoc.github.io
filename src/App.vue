<script setup>
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <main class="container-fluid d-flex flex-column vh-100">
    <RouterView class="flex-fill" />

    <Footer />
  </main>
</template>

<style lang="scss">
  @import '@sass/styles';
</style>
