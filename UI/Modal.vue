<template>
  <div class="modal__backdrop" :class="{'open': isOpen}" @click="backdropHandler">
    <div class="modal">
      <div class="modal__close" @click.stop="closeModal">
        <img src="../assets/white-cross.svg" alt="Cross">
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Modal',

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    closeModal() {
      this.$emit('closeModal')
    },

    backdropHandler(event) {
      if (event.target.className.includes('modal__backdrop')) {
        this.closeModal()
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.modal__backdrop {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: transparentize($back-drop, .2);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 16px;
  overflow: auto;
  opacity: 0;
  pointer-events: none;
  transition: all .3s ease;

  &.open {
    opacity: 1;
    pointer-events: all;

    .modal {
      transform: translate(0);
    }
  }

  @media only screen and (min-width: 1160px) {
    align-items: center;
  }
}

.modal {
  width: calc(100% - 32px);
  box-shadow: 0 16px 88px 0 rgba(4, 5, 6, 0.40);
  background: $dark-900;
  border-radius: 16px;
  padding: 16px;
  position: relative;
  overflow: hidden;
  transform: translate(0, 50%);
  transition: all .4s ease;

  &.from-right {
    transform: translate(50%, 0);
  }

  @media only screen and (min-width: 760px) {
    max-width: 560px;
  }

  @media only screen and (min-width: 1160px) {
    max-width: 834px;
  }
}

.modal__close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 24px;
  top: 24px;
  border-radius: 6px;
  background: $dark-600;
  cursor: pointer;
  opacity: .5;
  transition: all .3s ease;

  &:hover {
    opacity: 1;
  }
}
</style>