<template>
  <nav class="navbar flex-column border-right p-4">
    <h4 class="mb-4">JSDoc</h4>

    <ul>
      <li>Getting Started</li>
      <ul>
        <li>What is JSDoc?</li>
        <li>Documenting Your Code</li>
        <li>Generate a Website</li>
      </ul>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
  @use "@sass/abstract/variables/colors";


  .navbar {
    align-items: flex-start;
    background-color: colors.$primary-lighter;
    border-color: #EFEFD9;
    justify-content: flex-start;

    ul {
      li {
        display: block;
      }
    }
  }
</style>