<script>
  import { VueShowdown } from 'vue-showdown';

  import { Request } from "@/utilities/request";


  export default {
    data() {
      return {
        markdown$: new Request(),
        markdown: '',
      };
    },
    components: { VueShowdown },
    created() {
      this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => this.getMarkdown(toParams.index)
      )
    },

    methods: {
      getMarkdown(indexRoute) {
        this.markdown$ = new Request(`/src/assets/data/articles/${indexRoute}.md`);

        this.markdown$.getText()
          .then(_ => this.markdown = this.markdown$.response)
          .finally(_ => this.markdown$.loading = false);
      }
    }
  }

</script>
<template>
  <VueShowdown
    v-if="!markdown$.loading"
    :markdown="markdown"
    flavor="github"
  />
</template>