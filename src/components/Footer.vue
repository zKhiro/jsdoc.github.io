<script>
  import { GithubIcon } from "@scarlab/icons-vue/outline";
  import { CommonI18n } from "@/locales/common";

  export default {
    components: { GithubIcon },
    i18n: {
      sharedMessages: CommonI18n,
    }
  }
</script>
<template>
  <footer class="position-relative text-center font-size-14px font-weight-light border-top">
    <p class="mb-1 mb-md-0" v-html="$t('footer.copyrightSection', { openTagA: `<a class='font-weight-normal' href='https://github.com/jsdoc/jsdoc.github.io/graphs/contributors' target='_blank'>`, closeTagA: '</a>' })"></p>

    <p v-html="$t('footer.licenseSection', { openTagA: `<a class='font-weight-normal' href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>`, closeTagA: '</a>' })"></p>

    <section class="icons-section font-size-24px flex-center mr-5 h-100">
      <a class="text-light" href="https://github.com/jsdoc/jsdoc" target="_blank">
        <GithubIcon stroke-width="1" />
      </a>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
  @use "@sass/vendor/bootstrap/mixins/breakpoints" as b;


  footer {
    padding: 1rem 4.5rem;

    * {
      margin-bottom: 0;
    }

    p {
      line-height: 1.1;

      @include b.media-breakpoint-down(sm) {
        line-height: 1.2;
      }
    }

    .icons-section {
      line-height:  1em;
      margin:       auto 0;
      position:     absolute;
      right:        0;
      top:          0;
    }
  }
</style>
