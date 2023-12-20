<template>
  <div class="card-dropdown" :class="{'active': isActive === id}" @click="toggleVisibility">
    <div class="dropdown-item__head">
      <div class="dropdown-item__value">{{ index }}</div>
      <div class="dropdown-item__title">{{ title }}</div>
      <div class="dropdown-item__toggle">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="dropdown-item__body text">{{ text }}</div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'CardDropdown',

  props: {
    index: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    isActive: {
      type: Number,
      default: 0
    }
  },

  methods: {
    toggleVisibility() {
      this.$emit('toggleVisibility', this.id)
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.card-dropdown {
  border-radius: 14px;
  background: $dark-800;
  margin-bottom: 12px;
  transition: all .3s linear;

  &.active {

    .dropdown-item__toggle span:nth-child(1) {
      transform: rotate(0deg);
      left: 3px;
      top: 45%;
    }

    .dropdown-item__body {
      padding: 0 16px 16px 16px;
      max-height: 400px;
    }

    &:hover {
      background: $dark-800;

      .dropdown-item__value {
        background: $dark-700;
      }

      .dropdown-item__toggle {
        transform: rotate(0);
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: $dark-600;

    .dropdown-item__value {
      background: $dark-500;
    }

    .dropdown-item__toggle {
      transform: rotate(90deg);
    }
  }
}

.dropdown-item__head {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.dropdown-item__value {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $dark-700;
  border-radius: 7px;
  font-size: 14px;
  color: $white;
  font-weight: 700;
  line-height: 155%;
  transition: all .3s linear;
}

.dropdown-item__title {
  width: calc(100% - 88px);
  font-size: 14px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
}

.dropdown-item__toggle {
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s linear;

  span {
    width: 14px;
    height: 2px;
    background: $white;
    border-radius: 100px;
    transition: all .3s linear;

    &:nth-child(1) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}
</style>