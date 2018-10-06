<template>
  <div class="filters">
    <div class="filters__search">
      <div class="filters__label">search by brand</div>
      <input class="filters__input" type="text" v-model="searchInput" />
    </div>
    <div class="filters__buttons filters__sort">
      <div class="filters__label">sort</div>
      <div class="filters__button"><IconSortAlphabet /></div>
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
  margin-bottom: 75px;
  // grid-auto-flow: column;
  justify-content: start;
  align-items: end;
  grid-template-columns: auto auto 1fr auto;
  grid-column-gap: 40px;
  &__search {
  }
  &__label {
    font-size: 12px;
    color: #555555;
    margin-bottom: 5px;
    grid-area: label;
    &--end {
      justify-self: end;
    }
  }
  &__input {
    all: unset;
    border: 1px solid #555555;
    font-size: 16px;
    padding: 7px 5px;
  }
  &__sort {
    display: grid;
    grid-column-gap: 10px;
    grid-template-areas: "label label" "button1 button2";
  }
  &__button {
    border: 1px solid #000;
    padding: 5px 10px;
    cursor: pointer;
    display: grid;
    place-items: center;
    svg {
      height: 24px;
      .path--contrast {
        fill: #fff;
      }
    }
    &:hover,
    &.active {
      background: #000;
      svg {
        fill: #fff;
        .path--contrast {
          fill: #000;
        }
        .path--bar {
          fill: #ff0000;
        }
      }
    }
  }
  &__layout {
    justify-self: end;
    grid-column: -1;
  }
  &__buttons {
    display: grid;
    grid-column-gap: 10px;
    grid-template-areas: "label label" "button1 button2";
  }
}
</style>
