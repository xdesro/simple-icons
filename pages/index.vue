<template>
  <div>
    <Navbar />
    <div class="container">
    <h1 class="app__header">Free SVG icons
for popular brands</h1>
    <Filters v-on:search="updateSearch" />
<div class="icons-wrapper">
  <IconCard v-for="icon in filteredIcons" :icon="icon" :key="icon.title" />
  </div>
    </div>
  </div>
</template>

<script>
// Data
import { icons } from "@/_data/simple-icons.json";

// Components
import Navbar from "@/components/Navbar";
import Filters from "@/components/Filters";
import IconCard from "@/components/IconCard";

// Utilities
import _ from "lodash";
import { titleToFilename } from "@/scripts/utils";

export default {
  components: { Navbar, Filters, IconCard },
  data() {
    return {
      icons,
      searchInput: ""
    };
  },
  beforeCreate() {
    icons.forEach(icon => {
      const filename = titleToFilename(icon.title);
      icon.svg = `${filename}.svg`;
    });
  },
  methods: {
    updateSearch(searchInput) {
      this.searchInput = searchInput;
    }
  },
  computed: {
    filteredIcons() {
      if (this.searchInput.length > 0) {
        const regex = new RegExp(_.escapeRegExp(this.searchInput), "i");
        const isMatch = result => regex.test(result.title);
        return _.filter(this.icons, isMatch);
      }
      return icons;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
@import "../assets/scss/style";
body {
  background-image: linear-gradient(to bottom, palette(mono, 100), #f5f5f5);
  min-height: 100vh;
  font-family: "Roboto Mono", monospace;
}
.app {
  &__header {
    padding-top: 100px;
    margin-bottom: 40px;
  }
}
.icons-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  grid-gap: 20px;
  grid-auto-rows: 1fr;
}
</style>
