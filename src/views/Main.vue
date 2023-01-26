<script>
  import { Request } from "@/utilities/request";

  import Footer from "@/components/Footer.vue";
  import Navbar from "@/components/navbar/Navbar.vue";

  export default {
    components: { Footer, Navbar },
  }
</script>
<template>
  <div class="d-flex position-relative">
    <Navbar v-if="$route.meta.hasNavbar" />

    <div class="d-flex flex-column flex-fill vh-100">
      <main class="container-fluid flex-fill px-0">
        <RouterView class="h-100" />
      </main>

      <Footer />
    </div>
  </div>
</template>