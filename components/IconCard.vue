<template>
  <div class="icon-card" :style="cssProps">
    <img class="icon-card__background-icon" :src="this.iconPath">
    <div class="icon-card__header">
      <div class="icon-card__title">{{this.icon.title}}</div>
      <div class="icon-card__hex" >#{{this.icon.hex}}</div>
      <a class="icon-card__link" :href="this.icon.source"><IconExternalLink class="icon-card__link-icon"/>brand guidelines</a>
    </div>
    <div class="icon-card__footer">
      <img class="icon-card__main-icon" :src="this.iconPath">
      <div class="icon-card__subheader">Download</div>
      <div class="icon-card__actions">
        <div class="icon-card__button">SVG</div>
        <div class="icon-card__button">PNG</div>
      </div>
      <a class="icon-card__link" v-clipboard:copy=""><IconCodeCopy class="icon-card__link-icon" />copy svg code</a>
    </div>
  </div>
</template>

<script>
import { hex } from "wcag-contrast";

import IconCodeCopy from "@/components/icons/IconCodeCopy.vue";
import IconExternalLink from "@/components/icons/IconExternalLink.vue";

export default {
  props: ["icon"],
  components: {
    IconCodeCopy,
    IconExternalLink
  },
  created() {
    this.iconPath = require(`~/assets/icons/${this.icon.svg}`);
  },
  data() {
    return {
      iconPath: String
    };
  },
  computed: {
    cssProps() {
      const contrastColor = () => {
        if (hex(`#${this.icon.hex}`, "#000") > 10) {
          return "black";
        } else {
          return "white";
        }
      };
      return {
        "--highlight-color": `#${this.icon.hex}`,
        "--contrast-color": contrastColor()
      };
    }
  }
};
</script>

<style lang="scss">
.icon-card {
  position: relative;
  display: grid;
  overflow: hidden;
  align-content: end;
  border-radius: 7px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.4);
  }
  &__header {
    display: grid;
    grid-template-rows: 1fr auto auto;
    grid-row-gap: 10px;
    align-items: end;
    justify-items: start;
    height: 200px;
    padding: 15px;
    border-bottom: 1px solid #d8d8d8;
  }
  &__title {
    font-size: 30px;
    font-weight: 700;
  }
  &__hex {
    font-size: 16px;
    padding: 5px 15px;
    cursor: pointer;
    color: var(--contrast-color);
    background-color: var(--highlight-color);
  }
  &__link {
    font-size: 12px;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 5px;
    align-items: center;
    justify-items: start;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    color: #555;
    &:visited {
      color: #555;
    }
    &:hover {
      color: palette(mono);
      path {
        fill: palette(mono);
      }
    }
  }
  &__link-icon {
    height: 15px;
    path {
      fill: #555;
    }
  }
  &__footer {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      "icon title"
      "icon buttons"
      "icon clipboard";
    grid-row-gap: 5px;
    grid-column-gap: 15px;
    align-content: center;
    padding: 15px;
  }
  &__main-icon {
    grid-area: icon;
    max-width: 100%;
    height: 75px;
  }
  &__background-icon {
    position: absolute;
    top: -10px;
    right: -30px;
    width: 140px;
    opacity: 0.07;
  }
  &__subheader {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3.4px;
    text-transform: uppercase;
  }
  &__actions {
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-column-gap: 5px;
    align-items: start;
  }
  &__button {
    font-size: 12px;
    font-weight: 500;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
    text-align: center;
    letter-spacing: 3.24px;
    color: #555555;
    border: 1px solid palette(mono);
    &:hover {
      color: palette(mono, 100);
      background: palette(mono);
    }
  }
}
</style>
