<script>
  import { MoreHorizontalIcon } from "@scarlab/icons-vue/outline";

  export default {
    props: {
      loading: false,
    },
    components: { MoreHorizontalIcon }
  }
</script>

<template>
  <div :aria-busy="loading" aria-describedby="loading">
    <slot v-if="!loading" />
  </div>

  <div v-if="loading" id="loading" aria-label="Content loading...">
    /** @loading */
  </div>
</template>

<style lang="scss" scoped>
  @use "@sass/abstract/mixins/animations" as ma;
  @use "@sass/vendor/bootstrap" as b;

  #loading {
    animation-direction:        alternate;
    animation-iteration-count:  infinite;
    text-align:                 center;

    @include ma.animation(loading, 1.25s) {
      from {
        color: b.$dark;
      }
      to {
        color: transparentize(b.$dark, .9);
      }
    }
  }
</style>