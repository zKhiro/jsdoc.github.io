<script>
  import { VueShowdown } from 'vue-showdown';

  import { Request } from "@/utilities/request";

  import Footer from "@/components/Footer.vue";
  import Navbar from "@/components/navbar/Navbar.vue";

  export default {
    data() {
      return {
        markdown$: new Request('/src/assets/data/articles/getting-started.md'),
        markdown: '',
      };
    },
    components: { Footer, Navbar, VueShowdown },
    mounted() {
      this.getMarkdown();
    },
    methods: {
      getMarkdown() {
        this.markdown$.getText()
          .then(_ => this.markdown = this.markdown$.response)
          .finally(_ => this.markdown$.loading = false);
      }
    }
  }
</script>
<template>
  <div class="d-flex position-relative">
    <Navbar v-if="$route.meta.hasNavbar" />

    <div class="d-flex flex-column flex-fill vh-100">
      <main class="container-fluid flex-fill px-0">
        <RouterView class="h-100" />

        <VueShowdown
          v-if="!markdown$.loading"
          :markdown="markdown"
          flavor="github"
        />
      </main>

      <Footer />
    </div>
  </div>
</template>