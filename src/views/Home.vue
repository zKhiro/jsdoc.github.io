<script>
  import { HomeI18n } from '@/locales/home';

  export default {
    i18n: {
      sharedMessages: HomeI18n,
    },
  };
</script>
<template>
  <section class="home-section flex-center flex-column position-relative overflow-hidden">
    <header class="text-center">
      <h1>JSDoc</h1>

      <h4 class="font-weight-medium text-light">
        {{ $t('slogan') }}
      </h4>
    </header>

    <nav class="button-row row gap-8">
      <RouterLink class="btn btn-primary" to="/getting-started">
        {{ $t('buttons.start') }}
      </RouterLink>

      <RouterLink class="btn btn-outline-primary" to="/">
        {{ $t('buttons.github') }}
      </RouterLink>
    </nav>

    <span class="background-image vh-100"></span>
    <span class="background-image vh-100"></span>
  </section>
</template>
<style lang="scss" scoped>
  @use '@sass/abstract/variables/colors';
  @use '@sass/abstract/mixins/animations' as ma;
  @use '@sass/abstract/functions' as f;
  @use '@sass/vendor/bootstrap/mixins/breakpoints' as b;


  .home-section {
    background-color: colors.$primary-lighter;

    > * {
      z-index: 1;
    }
  }

  h1 {
    font-size: f.px-to-rem(64);
    margin-bottom: f.px-to-rem(40);
  }

  .button-row {
    margin-top: f.px-to-rem(124);
  }

  // to-do: check if there is a better way to implement the background movement.
  .background-image {
    $animation-duration:        25s;

    animation-iteration-count:  infinite;
    animation-timing-function:  linear;
    background-image:           url('@images/background.png');
    background-repeat:          repeat;
    background-size:            114vh;
    left:                       0;
    opacity:                    0.04;
    pointer-events:             none;
    position:                   absolute;
    min-width:                  100vw;
    z-index:                    0;

    @include ma.animation(bg-move, $animation-duration) {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(100%);
      }
    }

    &:first-of-type {
      @include ma.animation(bg-move, $animation-duration) {
        from {
          transform: translateY(-100%);
        }
        to {
          transform: translateY(0);
        }
      }
    }
  }
</style>
