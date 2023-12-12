<template>
  <button class="button" :type="submit ? 'submit' : 'button'">
    <slot/>
  </button>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Button',

  props: {
    submit: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.button {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  padding: 0 20px;

  &.blue {
    background: $blue;
    color: $white;

    img {
      margin-left: 4px;
    }

    &:hover {
      background: lighten($blue, 7%);
    }
  }

  &.dark {
    background: $dark-700;
    color: $gray;

    img {
      margin-left: 4px;
    }

    &:hover {
      background: lighten($dark-700, 7%);
    }
  }

  &.consultation {

    img {
      margin-left: 4px;
      transition: all .3s ease;
    }

    &:hover {
      img {
        transform: translateX(5px);
      }
    }
  }

  &.gray {
    border-radius: 8px;
    background: $dark-700;
    font-size: 14px;
    font-weight: 700;
    line-height: 160%;
    color: $gray;
    padding: 0 12px;

    svg path {
      transition: all .3s ease;
    }

    &:hover {
      background: $dark-600;
      color: $white;

      svg path {
        fill: $white;
      }
    }
  }

  &.transparent {
    background: transparent;
    font-size: 14px;
    font-weight: 700;
    color: $white;
    padding: 0 12px;
    border-radius: 8px;
  }

  &.animated {
    position: relative;
    overflow: hidden;
  }
}
</style>