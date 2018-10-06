<template>
  <div class="icon-card" :style="cssProps">
    <img class="icon-card__background-icon" :src="this.iconPath">
    <div class="icon-card__header">
      <div class="icon-card__title">{{this.icon.title}}</div>
      <div class="icon-card__hex" >#{{this.icon.hex}}</div>
      <a class="icon-card__link" :href="this.icon.source">brand guidelines -></a>
    </div>
    <div class="icon-card__footer">
      <img class="icon-card__main-icon" :src="this.iconPath">
      <div class="icon-card__subheader">Download</div>
      <div class="icon-card__actions">
        <div class="icon-card__button">SVG</div>
        <div class="icon-card__button">PNG</div>
      </div>
      <a class="icon-card__link">copy svg code</a>
    </div>
  </div>
</template>

<script>
import { hex } from "wcag-contrast";
export default {
  props: ["icon"],
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
          return "#000";
        } else {
          return "#FFF";
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
  display: grid;
  border-radius: 7px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.2);
  align-content: end;
  position: relative;
  overflow: hidden;
  &__header {
    padding: 15px;
    border-bottom: 1px solid #d8d8d8;
    height: 200px;
    display: grid;
    grid-row-gap: 5px;
    align-items: end;
    justify-items: start;
    grid-template-rows: 1fr auto auto;
  }
  &__title {
    font-weight: 700;
    font-size: 30px;
  }
  &__hex {
    font-size: 16px;
    padding: 5px 15px;
    color: var(--contrast-color);
    background-color: var(--highlight-color);
  }
  &__link {
    font-size: 12px;
    color: #555;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    &:visited {
      color: #555;
    }
    &:hover {
      color: #000;
    }
  }
  &__footer {
    padding: 15px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 15px;
    align-content: center;
    grid-row-gap: 5px;
    grid-template-areas:
      "icon title"
      "icon buttons"
      "icon clipboard";
  }
  &__main-icon {
    grid-area: icon;
    height: 75px;
    max-width: 100%;
  }
  &__background-icon {
    position: absolute;
    top: -10px;
    right: -30px;
    width: 140px;
    opacity: 0.07;
  }
  &__subheader {
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3.4px;
  }
  &__actions {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    align-items: start;
    grid-column-gap: 5px;
  }
  &__button {
    border: 1px solid #000;
    padding: 5px 10px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    color: #555555;
    letter-spacing: 3.24px;
    user-select: none;
    &:hover {
      background: #000;
      color: #fff;
    }
  }
}
</style>
