<template>
  <div class="accordion" :class="{'active': isOpen}">
    <div class="accordion__trigger" @click="toggleVisibility">
     <slot name="trigger" />
    </div>
    <div class="accordion__body">
      <slot name="body"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Accordion',

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    toggleVisibility() {
      this.isOpen = !this.isOpen
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.accordion {

  &.active {
    .accordion__body {
      max-height: 900px;
    }
    .accordion__chevron {
      transform: rotate(-90deg);
    }
    :deep(.chevron) {
      transform: rotate(270deg);
    }
  }
}
.accordion__body {
  max-height: 0;
  overflow: hidden;
  transition: all .3s ease;
}
</style>