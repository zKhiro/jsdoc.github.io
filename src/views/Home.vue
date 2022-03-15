<script>
  import { HomeI18n } from '@/locales/home';

  export default {
    i18n: {
      sharedMessages: HomeI18n,
    },
  };
</script>
<template>
  <div class="flex-center flex-column position-relative overflow-hidden">
    <h1>JSDoc</h1>

    <h4 class="font-weight-medium text-light">
      {{ $t('slogan') }}
    </h4>

    <div class="button-row row gap-7">
      <RouterLink class="btn btn-primary" to="/">
        {{ $t('buttons.start') }}
      </RouterLink>

      <RouterLink class="btn btn-outline-primary" to="/">
        {{ $t('buttons.github') }}
      </RouterLink>
    </div>

    <span class="background-image vw-100 vh-100"></span>
    <span class="background-image vw-100 vh-100"></span>
  </div>
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

    @include ma.animation(bg-move, 25s) {
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

      @include ma.animation(bg-move, 25s) {
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
