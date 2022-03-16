<script>
  import { GithubIcon } from "@scarlab/icons-vue/outline";

  export default {
    components: { GithubIcon },
  }
</script>
<template>
  <footer class="position-relative text-center font-size-14px font-weight-light p-3 border-top">
    <p>
      Copyright © 2011-2017 the <a class="font-weight-normal" href="https://github.com/jsdoc/jsdoc.github.io/graphs/contributors" target="_blank">contributors</a> to the JSDoc 3 documentation
      project.
    </p>
    <p>
      This website is open source and is licensed under the <a class="font-weight-normal" href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons
      Attribution-ShareAlike 3.0 Unported License</a>.
    </p>

    <section class="icons-section font-size-24px flex-center mr-5 h-100">
      <a class="text-light" href="https://github.com/jsdoc/jsdoc" target="_blank">
        <GithubIcon stroke-width="1" />
      </a>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    * {
      margin-bottom: 0;
    }

    p {
      line-height: 1.1;
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
