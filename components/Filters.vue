<template>
  <div class="filters">
    <div class="filters__search">
      <div class="filters__label">search by brand</div>
      <input class="filters__input" type="text" v-model="searchInput" />
    </div>
    <div class="filters__buttons filters__sort">
      <div class="filters__label">sort</div>
      <div class="filters__button" v-bind:class="{active: true}"><IconSortAlphabet /></div>
      <div class="filters__button"><IconSortHue /></div>
    </div>
    <div class="filters__buttons filters__layout">
      <div class="filters__label filters__label--end">layout</div>
      <div class="filters__button" v-bind:class="{active: true}"><IconLayoutComfortable /></div>
      <div class="filters__button" ><IconLayoutCompact /></div>
    </div>
  </div>
</template>

<script>
import IconSortAlphabet from "@/components/icons/IconSortAlphabet.vue";
import IconSortHue from "@/components/icons/IconSortHue.vue";
import IconLayoutComfortable from "@/components/icons/IconLayoutComfortable.vue";
import IconLayoutCompact from "@/components/icons/IconLayoutCompact.vue";

export default {
  data() {
    return {
      searchInput: ""
    };
  },
  components: {
    IconSortAlphabet,
    IconSortHue,
    IconLayoutComfortable,
    IconLayoutCompact
  },
  watch: {
    searchInput: function() {
      this.$emit("search", this.searchInput);
    }
  }
};
</script>

<style lang="scss">
.filters {
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  grid-column-gap: 40px;
  align-items: end;
  justify-content: start;
  margin-bottom: 75px;
  &__layout {
    grid-column: -1;
  }
  &__buttons {
    display: grid;
    grid-template-areas: "label label" "button1 button2";
    grid-column-gap: 10px;
  }
  &__label {
    font-size: 12px;
    grid-area: label;
    margin-bottom: 5px;
    color: #555555;
    &--end {
      justify-self: end;
    }
  }
  &__input {
    all: unset;
    font-size: 16px;
    padding: 7px 5px;
    border: 1px solid #555555;
  }
  &__button {
    display: grid;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid palette(mono);

    place-items: center;
    svg {
      height: 24px;
      .path--contrast {
        fill: palette(mono, 100);
      }
    }
    &:hover,
    &.active {
      background: palette(mono);
      svg {
        fill: palette(mono, 100);
        .path--contrast {
          fill: palette(mono);
        }
        .path--bar {
          fill: palette(warn);
        }
      }
    }
  }
}
</style>
