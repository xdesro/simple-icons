<template>
  <div class="navbar">
    <div class="navbar__brand">
      <nuxt-link class="navbar__link" to="/">
      SimpleIcons
      </nuxt-link>
    </div>
    <div class="navbar__items">
      <div class="navbar__item navbar__item--icon"><a :href="githubLink" class="navbar__link"><IconGithub /></a></div>
      <div class="navbar__item"><a class="navbar__link" :href="npmLink">npm</a></div>
      <div class="navbar__item"><a class="navbar__link" :href="aboutLink">about</a></div>
    </div>
  </div>
</template>

<script>
import IconGithub from "@/components/icons/IconGithub";
export default {
  data() {
    return {
      githubLink: "https://github.com/simple-icons/simple-icons",
      npmLink: "https://www.npmjs.com/package/simple-icons",
      aboutLink:
        "https://github.com/simple-icons/simple-icons/blob/develop/README.md"
    };
  },
  components: {
    IconGithub
  }
};
</script>

<style lang="scss">
.navbar {
  font-size: 16px;
  font-weight: 700;
  display: grid;
  grid-auto-flow: column;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px;
  color: palette(mono) 000;
  background-color: palette(mono, 100);
  &__brand {
    // font-weight: 700;
    font-size: 20px;
  }
  &__items {
    // font-weight: 700;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 20px;
  }
  &__item {
    &--icon {
      width: 20px;
      height: 20px;
    }
  }
  &__link {
    transition: all 0.1s ease;
    text-decoration: none;
    &:visited {
      color: palette(mono);
    }
    &:hover {
      color: lighten(palette(mono), 50%);
      svg {
        fill: lighten(palette(mono), 50%);
      }
    }
  }
}
</style>
