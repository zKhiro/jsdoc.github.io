<script>
  import { RouterLink } from 'vue-router'

  export default {
    inheritAttrs: false,

    data() {
      return { isActive: false };
    },

    props: {
      ...RouterLink.props,
      inactiveClass: String,
    },

    created() {
      this.isActive = this.checkCurrentRouteEqualsTo(this.$route.fullPath);
    },

    watch: {
      $route(to, _) {
        this.isActive = this.checkCurrentRouteEqualsTo(to.fullPath);
      }
    },

    computed: {
      isExternalLink() {
        return typeof this.to === 'string' && this.to.startsWith('http');
      },
    },

    methods: {
      checkCurrentRouteEqualsTo(currentRoute) {
        return this.checkParrentSublink(currentRoute) || currentRoute === this.to;
      },
      checkParrentSublink(currentRoute) {
        return currentRoute.split("#")[0] === this.to;
      }
    }
  }
</script>
<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>

  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>