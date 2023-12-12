<template>
  <div class="input-group">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <input
      class="input"
      :value="modelValue"
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :pattern="pattern"
      :required="required"
      @input="inputHandler"
    >
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Input',

  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    pattern: {
      type: String
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },

  methods: {
    inputHandler(event) {
      this.$emit('update:modelValue', event.target.value)
      this.$emit('onInput', event)
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .label {
    font-size: 11px;
    font-weight: 700;
    line-height: 130%;
    color: $gray-100;
    margin-bottom: 2px;
  }

  .input {
    height: 41px;
    border-radius: 8px;
    border: 1px solid $dark-600;
    padding: 0 12px;
    background: transparent;
    color: $gray-100;
    outline: none;

    &:focus {
      border-color: $blue;
    }

    &::placeholder {
      font-size: 14px;
      font-weight: 500;
      line-height: 165%;
      color: $dark-500;
    }

    &[type="date"]::-webkit-calendar-picker-indicator {
      color: rgba(0, 0, 0, 0);
      opacity: 1;
      display: block;
      background: url('../assets/white-calendar.svg') no-repeat center;
      background-size: contain;
      width: 20px;
      height: 20px;
      border-width: thin;
    }
  }
}
</style>