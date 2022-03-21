<script>
  import { NavbarI18n } from '@/locales/navbar';
  import CustomLink from '../CustomLink.vue';

  export default {
    data() {
        return {
            links: [],
            subLinks: [],
        };
    },
    props: ["navLinks", "navLinksIndex", "parentLink"],
    mounted() {
        if (Array.isArray(this.navLinks)) {
            this.links = this.navLinks.map(value => value.toLocaleLowerCase());
            return;
        }
        Object.keys(this.navLinks).forEach(navLinksKey => {
            this.links.push(navLinksKey.toLocaleLowerCase());
            this.subLinks[this.links.length - 1] = this.navLinks[navLinksKey];
        });
    },
    i18n: { sharedMessages: NavbarI18n },
    components: { CustomLink }
}
</script>
<template>
  <ul :class="parentLink ? 'navbar-nav sub-links' : 'navbar-nav'">
    <li class="nav-item" v-for="(link, index) of links" :key="index">
      <CustomLink
        v-if="!parentLink"
        active-class="link-active font-weight-medium"
        class="nav-link"
        :to="`/${link}`"
      >
        <span v-t="`links[${navLinksIndex}].${link}.label`"></span>
      </CustomLink>

      <CustomLink
        v-else
        active-class="link-active font-weight-medium"
        class="nav-link flex-fill"
        aria-current-value="step"
        :to="`/${[parentLink, link].join('#')}`"
      >
        <span v-t="`links[${navLinksIndex}].${parentLink}.subLinks.${link}`"></span>
      </CustomLink>

      <span class="nav-link-border"></span>

      <NavLink v-if="subLinks[index]" :navLinks="subLinks[index]" :navLinksIndex="navLinksIndex" :parentLink="link" />
    </li>
  </ul>
</template>
<style lang="scss" scoped>
  @use "@sass/abstract/variables/navbar" as vn;
  @use "@sass/abstract/functions" as f;
  @use "@sass/vendor/bootstrap" as bv;

  .navbar-nav {
    .nav-item {
      display: block;
    }

    &.sub-links {
      padding-left: .75rem;

      .nav-item {
        display:        flex;
        flex-direction: row-reverse;

        &:first-of-type {
          .link-active + .nav-link-border {
            border-radius: 1rem 1rem 1rem 0;
          }
          .nav-link-border {
            border-radius: 1rem 1rem 0 0;
          }
        }

        &:last-of-type {
          .link-active + .nav-link-border {
            border-radius: 0 1rem 1rem 1rem;
          }

          .nav-link-border {
            border-radius: 0 0 1rem 1rem;
          }
        }

        :deep(.nav-link) {
          font-size:      vn.$sub-link-font-size;
          margin:         vn.$sub-link-padding-y 0;
          margin-left:    f.px-to-rem(4);
          padding-top:    vn.$sub-link-padding-y !important;
          padding-bottom: vn.$sub-link-padding-y !important;

          &.link-active {
            & + .nav-link-border {
              background-color: vn.$sub-link-border-color-active;
              border-radius:    0 1rem 1rem 0;
              width:            vn.$sub-link-border-size-active;
            }
          }
        }

        .nav-link-border {
          background-color: vn.$sub-link-border-color;
          width:            vn.$sub-link-border-size;
        }
      }
    }

    :deep(.nav-link) {
      border-radius: bv.$border-radius-sm;

      &:hover {
        background-color: vn.$link-bg-color-hover;
        color:            vn.$link-color-hover !important;

        & + .nav-link-border {
          background-color: bv.$primary;
        }
      }
    }

    &:not(.sub-links) {
      gap: .5rem;
    }
  }
</style>