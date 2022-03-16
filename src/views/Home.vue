<script>
  import { HomeI18n } from '@/locales/home';

  export default {
    i18n: {
      sharedMessages: HomeI18n,
    },
  };
</script>
<template>
  <section class="flex-center flex-column position-relative overflow-hidden">
    <header>
      <h1>JSDoc</h1>

      <h4 class="font-weight-medium text-light">
        {{ $t('slogan') }}
      </h4>
    </header>

    <nav class="button-row row gap-8">
      <RouterLink class="btn btn-primary" to="/navbar">
        {{ $t('buttons.start') }}
      </RouterLink>

      <RouterLink class="btn btn-outline-primary" to="/">
        {{ $t('buttons.github') }}
      </RouterLink>
    </nav>

    <span class="background-image vw-100 h-100"></span>
    <span class="background-image vw-100 h-100"></span>
  </section>
</template>
<style lang="scss" scoped>
  @use '@sass/abstract/mixins/animations' as ma;
  @use '@sass/abstract/functions' as f;

  h1 {
    font-size: f.px-to-rem(64);
    margin-bottom: f.px-to-rem(40);
  }

  .button-row {
    margin-top: f.px-to-rem(124);
  }

  .background-image {
    $animation-duration: 25s;

    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-image: url('@images/background.png');
    background-repeat: repeat;
    background-size: 50%;
    left: 0;
    opacity: 0.04;
    pointer-events: none;
    position: absolute;
    z-index: -1;

    @include ma.animation(bg-move, $animation-duration) {
      from {
        top: 0;
      }
      to {
        top: 100%;
      }
    }

    &:first-of-type {
      top: auto;

      @include ma.animation(bg-move, $animation-duration) {
        from {
          bottom: 100%;
        }
        to {
          bottom: 0;
        }
      }
    }
  }
</style>
