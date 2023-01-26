<script>
  import NavLink from "./NavLink.vue";
  import { ArrowLeftAltIcon } from "@scarlab/icons-vue/outline";
  import { EqualSquareIcon } from "@scarlab/icons-vue/outline";
  import { NavbarI18n } from "@/locales/navbar";
  import { Request } from "@/utilities/request";
  import Loading from "../Loading.vue";


  export default {
    data() {
      return {
        navLinks: [],
        navbarIsShown: false,
        requestNavLinks: new Request('/src/assets/data/navbar/nav-links.json'),
      };
    },
    mounted() {
      this.fetchNavItems();
    },
    methods: {
      async fetchNavItems() {
        this.requestNavLinks.getJson()
          .then(_ => {
            Object.keys(this.requestNavLinks.response).forEach(responseKeys => {
              this.navLinks.push({
                title: responseKeys.toLocaleLowerCase(),
                links: this.requestNavLinks.response[responseKeys],
              });
            });
          })
          .finally(_ => this.requestNavLinks.loading = false);
      },

      translateNavbar(e) {
        this.navbarIsShown = e.currentTarget.parentElement.classList.toggle('show');
      }
    },
    components: { ArrowLeftAltIcon, EqualSquareIcon, NavLink, Loading },
    i18n: { sharedMessages: NavbarI18n }
}
</script>
<template>
  <div class="navbar-wrapper vh-100">
    <nav class="navbar navbar-light flex-column border-right px-xl-4 px-3 py-4">
      <h4 class="mb-4">JSDoc</h4>

      <Loading :loading="requestNavLinks.loading">
        <template v-for="(navLink, index) of navLinks" :key="index">
          <section>
            <h6 class="text-lighten font-weight-medium mb-1 pl-2" v-if="navLink.title">{{ $t(`links[${index}].title`) }}</h6>

            <NavLink :navLinks="navLink.links" :navLinksIndex="index" />
          </section>
        </template>
      </Loading>
    </nav>

    <button
      class="btn-collapse-navbar d-flex d-lg-none align-self-end mb-3 p-2"
      @click="translateNavbar"
    >
      <ArrowLeftAltIcon v-if="navbarIsShown" :width="32" :height="32" />
      <EqualSquareIcon v-else :width="32" :height="32" />
    </button>
  </div>
</template>
<style lang="scss" scoped>
  @use "@sass/abstract/functions" as f;

  @use "@sass/abstract/variables/colors";
  @use "@sass/abstract/variables/navbar" as nv;
  @use "@sass/vendor/bootstrap" as b;


  .navbar {
    display:          block;
    height:           100%;
    min-width:        nv.$navbar-width;
    max-width:        nv.$navbar-width;
    overflow-x:       hidden;
    overflow-y:       auto;
    width:            nv.$navbar-width;

    section:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }

  .btn-collapse-navbar {
    border:             1px solid;
    border-radius:      0 b.$border-radius-lg b.$border-radius-lg 0;
    border-left-width:  0;

    :deep(.scarlab) {
      color: b.$light;
    }

    &:hover {
      :deep(.scarlab) {
        color: b.$primary;
      }
    }
  }

  .navbar, .btn-collapse-navbar {
    background-color: colors.$primary-lighter;
    border-color:     #EFEFD9;
  }

  @include b.media-breakpoint-down(md) {
    .navbar-wrapper {
      display:    flex;
      position:   absolute;
      transform:  translateX(calc(f.px-to-rem(49) - 100%));
      transition: transform .2s;
      z-index:    1000;

      .navbar {
        min-width:  16rem;
        width:      auto;
      }

      &.show {
        transform: translateX(0);
      }
    }
  }
</style>