<template>
  <div class="position-relative overflow-hidden">
    <div class="container-fluid flex-center flex-column vh-100">
      <h1>JSDoc</h1>

      <h4 class="font-weight-medium text-light">
        {{ $t('home.slogan') }}
      </h4>

      <div class="button-row row gap-7">
        <RouterLink class="btn btn-primary" to="/">Get Started</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/">Github</RouterLink>
      </div>
    </div>

    <span class="background-image vw-100 vh-100"></span>
    <span class="background-image vw-100 vh-100"></span>
  </div>
</template>
<style lang="scss" scoped>
@use '@sass/abstract/mixin' as m;
@use '@sass/abstract/functions' as f;

h1 {
  font-size: f.px-to-rem(64);
  margin-bottom: f.px-to-rem(40);
}

.button-row {
  margin-top: f.px-to-rem(124);
}

.background-image {
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-image: url('@images/background.png');
  background-repeat: repeat;
  background-size: 50%;
  left: 0;
  opacity: 0.04;
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: -1;

  @include m.animation(bg-move, 25s) {
    from {
      top: 0;
    }
    to {
      top: 100vh;
    }
  }

  &:first-of-type {
    bottom: 100vh;
    top: auto;

    @include m.animation(bg-move, 25s) {
      from {
        bottom: 100vh;
      }
      to {
        bottom: 0;
      }
    }
  }
}
</style>
