<template>
  <div class="tooltip">
    <div class="tooltip__trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="tooltip__message">
      <svg class="arrow" width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5L7.45308 1.08768C6.7209 0.457695 5.6431 0.440996 4.89176 1.048L-2.18557e-07 5L12 5Z" fill="#2E3038"/>
      </svg>

      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Tooltip'
})
</script>

<style scoped lang="scss">
@import 'vars';

.tooltip {
  position: relative;

  &:hover .tooltip__message {
    opacity: 1;
    pointer-events: all;
  }
}
.tooltip__trigger {
  cursor: pointer;
}
.tooltip__message {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transition: all .3s ease;
  top: calc(100% + 32px);
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  border-radius: 5px;
  background: $dark-600;
  font-size: 13px;
  font-weight: 700;
  line-height: 150%;
  color: $white;

  .arrow {
    position: absolute;
    left: 50%;
    top: -2px;
    transform: translate(-50%, -50%);
  }
}
</style>