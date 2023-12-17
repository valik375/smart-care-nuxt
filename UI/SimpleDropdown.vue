<template>
  <div class="simple-dropdown" ref="dropdownRef" :class="{'active': isOpen}">
    <div class="simple-dropdown-button" @click="toggleVisibility">
     <slot name="trigger" />
    </div>
    <div class="simple-dropdown-body">
      <slot name="body" :toggleVisibility="toggleVisibility"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SimpleDropdown',

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    toggleVisibility() {
      this.isOpen = !this.isOpen
    },

    focusOff(event) {
      if (!this.$refs.dropdownRef?.contains(event.target) && this.isOpen) {
        this.toggleVisibility()
      }
    }
  },

  watch: {
    isOpen(value) {
      value
        ? document.addEventListener('click', this.focusOff, true)
        : document.removeEventListener('click', this.focusOff, true)
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.simple-dropdown {
  position: relative;

  .simple-dropdown-body {
    position: absolute;
    width: 288px;
    border-radius: 12px;
    border: 1px solid $dark-600;
    background: $dark-800;
    box-shadow: 0 8px 30px 0 rgba(4, 5, 6, 0.06);
    padding: 12px;
    left: 0;
    top: calc(100% + 20px);
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease;
  }

  &.active {

    .simple-dropdown-body {
      opacity: 1;
      pointer-events: all;
    }

    :deep(.simple-dropdown-button button) {
      background: $dark-600;
      color: $white;

      svg {
        transform: rotate(180deg);

        path {
          fill: $white;
        }
      }
    }
  }

}
</style>